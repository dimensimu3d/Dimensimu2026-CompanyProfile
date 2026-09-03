import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, RoundedBox } from '@react-three/drei';

function ProceduralPrinter() {
  return (
    <group scale={1.08} position={[0, -0.55, 0]}>
      <RoundedBox args={[4.7, 0.25, 3.6]} radius={0.16} smoothness={5} position={[0, -1.25, 0]}>
        <meshStandardMaterial color="#eceaf3" roughness={0.45} />
      </RoundedBox>
      {[-2.05, 2.05].map((x) => (
        <RoundedBox key={`front-${x}`} args={[0.24, 4.7, 0.24]} radius={0.08} smoothness={4} position={[x, 0.95, 1.55]}>
          <meshStandardMaterial color="#d9d5e2" roughness={0.42} />
        </RoundedBox>
      ))}
      {[-2.05, 2.05].map((x) => (
        <RoundedBox key={`back-${x}`} args={[0.24, 4.7, 0.24]} radius={0.08} smoothness={4} position={[x, 0.95, -1.55]}>
          <meshStandardMaterial color="#d9d5e2" roughness={0.42} />
        </RoundedBox>
      ))}
      <RoundedBox args={[4.35, 0.24, 3.35]} radius={0.1} smoothness={4} position={[0, 3.18, 0]}>
        <meshStandardMaterial color="#e5e1ed" roughness={0.4} />
      </RoundedBox>
      <RoundedBox args={[3.75, 0.2, 2.55]} radius={0.1} smoothness={4} position={[0, -0.55, 0]}>
        <meshStandardMaterial color="#d1cddc" roughness={0.34} metalness={0.08} />
      </RoundedBox>
      <mesh position={[0, 0.95, 0]}>
        <boxGeometry args={[0.2, 3.1, 0.18]} />
        <meshStandardMaterial color="#bdb7ca" roughness={0.36} />
      </mesh>
      <mesh position={[0, 0.35, 0]}>
        <sphereGeometry args={[0.55, 24, 24]} />
        <meshStandardMaterial color="#865cf2" emissive="#6b41db" emissiveIntensity={0.14} roughness={0.28} />
      </mesh>
      <mesh position={[0, -0.22, 0]}>
        <cylinderGeometry args={[0.42, 0.5, 0.7, 32]} />
        <meshStandardMaterial color="#9c7af2" roughness={0.3} />
      </mesh>
      <mesh position={[0.95, -0.05, 0.9]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.58, 0.11, 16, 48]} />
        <meshStandardMaterial color="#e6e2ed" roughness={0.3} metalness={0.08} />
      </mesh>
    </group>
  );
}

function LoadedPrinter({ url }) {
  const [scene, setScene] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    import('three/examples/jsm/loaders/GLTFLoader.js').then(({ GLTFLoader }) => {
      if (!active) return;
      const loader = new GLTFLoader();
      loader.load(url, (gltf) => {
        if (!active) return;
        gltf.scene.scale.setScalar(2.2);
        setScene(gltf.scene);
      }, undefined, () => {
        if (active) setFailed(true);
      });
    }).catch(() => {
      if (active) setFailed(true);
    });
    return () => {
      active = false;
    };
  }, [url]);

  if (failed || !scene) return <ProceduralPrinter />;
  return <primitive object={scene} position={[0, -1.05, 0]} />;
}

export default function Printer3DExperience({ modelUrl = import.meta.env.VITE_PRINTER_MODEL_URL }) {
  return (
    <div className="printer-3d" aria-label="Preview 3D printer Dimensimu 3D">
      <Canvas
        dpr={[1, 1.15]}
        frameloop="demand"
        camera={{ position: [6.4, 4.8, 7.4], fov: 34 }}
        gl={{ antialias: true, powerPreference: 'default', alpha: true }}
      >
        <ambientLight intensity={1.65} />
        <directionalLight position={[4, 7, 5]} intensity={3.0} />
        <directionalLight position={[-4, 4, -2]} intensity={1.15} />
        {modelUrl ? <LoadedPrinter url={modelUrl} /> : <ProceduralPrinter />}
        <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI * 0.32} maxPolarAngle={Math.PI * 0.62} />
      </Canvas>
      <span className="printer-3d-label"><i /> Interactive 3D Preview</span>
    </div>
  );
}
