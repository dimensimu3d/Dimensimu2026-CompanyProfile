import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    if (import.meta.env?.DEV) {
      console.error('Dimensimu 3D UI error:', error, info);
    }
    window.dispatchEvent(new CustomEvent('app:error', { detail: { error, info } }));
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="error-screen" role="alert">
          <div className="error-card">
            <span className="eyebrow">DIMENSIMU 3D</span>
            <h1>Halaman mengalami kendala.</h1>
            <p>Silakan muat ulang halaman. Data pemesanan Anda tidak disimpan di browser.</p>
            <button className="btn btn-primary" onClick={() => window.location.reload()}>
              Muat Ulang
            </button>
          </div>
        </main>
      );
    }
    return this.props.children;
  }
}
