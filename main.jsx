import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { APIProvider } from '@vis.gl/react-google-maps';

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

if (!GOOGLE_MAPS_API_KEY || GOOGLE_MAPS_API_KEY === 'YOUR_REAL_API_KEY_HERE') {
  console.warn('Google Maps API key is missing or not set correctly in your .env file. The map will not work until you provide a valid key.');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
      <App />
    </APIProvider>
  </StrictMode>,
)
