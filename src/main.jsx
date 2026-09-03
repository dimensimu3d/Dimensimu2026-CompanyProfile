import React from 'react';
import { registerSW } from './utils/registerSW';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(<App />);

registerSW();
