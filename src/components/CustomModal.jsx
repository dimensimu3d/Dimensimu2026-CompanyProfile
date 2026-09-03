import { Send, X } from 'lucide-react';
import { useState } from 'react';
import { openWhatsApp } from '../utils/whatsapp';

export default function CustomModal({ onClose, onSubmit, notify }) {
  const [form, setForm] = useState({ nama: '', kontak: '', kebutuhan: '' });

  const update = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));

  const submit = (event) => {
    event.preventDefault();
    const message = [
      'Halo Dimensimu 3D, saya ingin konsultasi custom project.',
      '',
      `Nama: ${form.nama}`,
      `Kontak: ${form.kontak}`,
      `Kebutuhan: ${form.kebutuhan}`,
    ].join('\n');

    if (openWhatsApp(message)) {
      onClose();
      return;
    }

    onSubmit(event);
  };

  return <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="custom-title"><button className="modal-close" onClick={onClose} aria-label="Tutup"><X/></button><span className="eyebrow">CUSTOM PROJECT</span><h2 id="custom-title">Mari Wujudkan Idemu</h2><p>Isi kebutuhan singkat di bawah ini. Pesan akan disiapkan untuk dikirim ke WhatsApp tim Dimensimu 3D.</p><form onSubmit={submit} className="custom-form"><label>Nama<input required value={form.nama} onChange={update('nama')} placeholder="Nama Anda"/></label><label>Kontak<input required value={form.kontak} onChange={update('kontak')} placeholder="WhatsApp / Email"/></label><label>Kebutuhan<textarea required value={form.kebutuhan} onChange={update('kebutuhan')} rows="4" placeholder="Contoh: cetak miniature, custom holder, prototype..."/></label><button className="btn btn-primary" type="submit">Kirim ke WhatsApp <Send size={17}/></button></form></div></div>;
}
