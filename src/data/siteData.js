const publicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
import {
  Box, PenTool, Layers3, Gem, MessageCircle, Settings2, Truck, Rocket,
  HeartHandshake, PackageCheck, Star
} from 'lucide-react';

export const navItems = ['Beranda','Tentang Kami','Layanan','Produk','Proses','Portofolio','FAQ','Kontak'];

// Data katalog dibuat siap diganti dengan foto produk asli tanpa mengubah component UI.
export const catalogSettings = {
  // Jumlah maksimum produk yang ditampilkan pertama kali pada katalog.
  // Nilai ini juga dapat diubah langsung oleh pengguna melalui kontrol katalog.
  defaultLimit: 8,
  limitOptions: [4, 8, 12],
};

export const products = [
  { id: 1, name: 'IoT Smart Home', price: 'Custom / Project', tag: 'IoT', category: 'Edukasi & Robotik', image: publicAsset('/images/products/iot-smart-home.webp'), art: 'robot', description: 'Project smart home berbasis mikrokontroler untuk kebutuhan IoT, edukasi, dan prototyping.' },
  { id: 2, name: 'Paket Penjemur Otomatis', price: 'Custom / Project', tag: 'DIY Kit', category: 'Edukasi & Robotik', image: publicAsset('/images/products/paket-penjemur-otomatis.webp'), art: 'gear', description: 'Paket komponen dan casing untuk project penjemur otomatis, cocok sebagai referensi project elektronika dan prototyping.' },
  { id: 3, name: 'Mechanical Keyboard Button Fidget Keychain', price: 'Custom / PO', tag: 'Custom', category: 'Aksesoris', image: '', art: 'keychain', description: 'Keychain fidget bergaya mechanical keyboard yang dapat dikustom casing, keycap, huruf, warna, dan emoji.' },
  { id: 4, name: 'Convex Mirror Miniature Keychain', price: 'Ready / PO', tag: 'Ready', category: 'Aksesoris', image: publicAsset('/images/products/convex-mirror-closeup.webp'), gallery: [publicAsset('/images/products/convex-mirror-closeup.webp'), publicAsset('/images/products/convex-mirror-karakter.webp')], art: 'keychain', description: 'Miniatur cermin convex dengan diameter sekitar 38 mm, cocok untuk gantungan tas atau koleksi miniatur.' },
  { id: 5, name: 'Mainan Artikulasi Dinosaurus', price: 'Ready / PO', tag: 'Ready', category: 'Mainan & Koleksi', image: '', art: 'figure', description: 'Dinosaurus articulated hasil 3D print dengan bagian tubuh yang dapat digerakkan.' },
  { id: 6, name: 'ARM ROBOT V1 — Kit DIY Arduino', price: 'Custom / PO', tag: 'DIY Kit', category: 'Edukasi & Robotik', image: '', art: 'robot', description: 'Kit DIY lengan robot berbasis Arduino dengan opsi servo SG90 atau MG90 untuk belajar robotik dan prototyping.' },
  { id: 7, name: 'HOLDER RAKET TENIS DINDING', price: 'Custom / PO', tag: 'Custom Brand', category: 'Fungsional', image: '', art: 'gear', description: 'Holder raket dinding yang praktis dan rapi, dapat disesuaikan untuk kebutuhan personal maupun branding.' },
  { id: 8, name: 'PHONE HOLDER NET PADEL & TENNIS', price: 'Custom / PO', tag: 'Content', category: 'Fungsional', image: '', art: 'phone', description: 'Clamp holder untuk memasang smartphone pada net padel atau tenis untuk merekam aktivitas dan latihan.' },
  { id: 9, name: 'Lip Balm Keychain Holder', price: 'Custom / PO', tag: 'Custom', category: 'Aksesoris', image: '', art: 'vase', description: 'Holder lip balm mini dengan desain floral yang mudah dibawa dan cocok sebagai aksesori tas.' },
  { id: 10, name: 'One Wish Willow — Collectible Replica', price: 'Custom / PO', tag: 'Collectible', category: 'Figur & Koleksi', image: '', art: 'figure', description: 'Replika koleksi terinspirasi karakter film dengan pendekatan 3D printing dan presentasi bergaya collectible.' },
];

export const services = [
  { icon: Box, title: '3D Printing', text: 'Cetak 3D untuk produk fungsional, dekorasi, miniatur, aksesoris, dan kebutuhan prototyping.' },
  { icon: PenTool, title: 'Custom Desain 3D', text: 'Wujudkan ide menjadi model 3D sesuai ukuran, bentuk, identitas brand, dan kebutuhanmu.' },
  { icon: Layers3, title: 'Prototyping', text: 'Buat prototype untuk menguji bentuk, ukuran, ergonomi, dan fungsi sebelum produksi lebih lanjut.' },
  { icon: Gem, title: 'Finishing & Post Processing', text: 'Pembersihan dan finishing agar hasil print lebih siap digunakan, dipajang, atau diberikan sebagai hadiah.' },
];

export const steps = [
  { icon: MessageCircle, title: 'Konsultasi', text: 'Sampaikan ide, referensi, atau file 3D yang sudah kamu miliki.' },
  { icon: PenTool, title: 'Desain / Review', text: 'Kami buat atau review desain, ukuran, material, dan detail kebutuhan.' },
  { icon: Settings2, title: 'Proses Cetak', text: 'Model dipersiapkan lalu diproses menggunakan 3D printer.' },
  { icon: Gem, title: 'Finishing', text: 'Hasil cetak dibersihkan dan diproses sesuai kebutuhan.' },
  { icon: Truck, title: 'Pengiriman', text: 'Produk siap diambil atau dikirim ke alamat pelanggan.' },
];

export const portfolio = [
  { title: 'IoT Smart Home', image: publicAsset('/images/products/iot-smart-home.webp'), art: 'robot' },
  { title: 'Paket Penjemur Otomatis', image: publicAsset('/images/products/paket-penjemur-otomatis.webp'), art: 'gear' },
  { title: 'Convex Mirror Custom', image: publicAsset('/images/products/convex-mirror-closeup.webp'), art: 'keychain' },
  { title: 'Convex Mirror Character', image: publicAsset('/images/products/convex-mirror-karakter.webp'), art: 'keychain' },
];

export const stats = [
  ['1000+','Proyek Selesai',Rocket],
  ['500+','Pelanggan Puas',HeartHandshake],
  ['50+','Produk Tersedia',PackageCheck],
  ['4.9/5','Rating Pelanggan',Star],
];

export const faqs = [
  ['Apakah bisa cetak dari file STL/OBJ?','Bisa. Kami menerima file 3D umum seperti STL dan OBJ. Jika belum memiliki file, kami juga menyediakan layanan custom desain.'],
  ['Berapa lama proses pengerjaan?','Tergantung ukuran, material, jumlah, dan tingkat detail. Estimasi diberikan setelah desain atau kebutuhan diperiksa.'],
  ['Apakah bisa custom warna dan ukuran?','Bisa. Warna, ukuran, dan beberapa detail produk dapat disesuaikan selama masih sesuai kemampuan proses cetak.'],
  ['Apakah bisa custom untuk kebutuhan bisnis atau branding?','Bisa. Kami dapat membantu membuat merchandise, display, holder, prototype, dan komponen custom sesuai kebutuhan bisnis.'],
  ['Bagaimana cara memesan?','Kirim ide, referensi, atau file melalui WhatsApp. Tim kami akan membantu mengecek kebutuhan, desain, estimasi harga, dan waktu pengerjaan.'],
];
