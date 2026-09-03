import { stats } from '../data/siteData';
export default function Stats() {
  return <section className="stats-section"><div className="container stats-grid">
    {stats.map(([n,l,Icon]) => <div className="stat" key={l}><Icon/><div><strong>{n}</strong><span>{l}</span></div></div>)}
  </div></section>;
}
