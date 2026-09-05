import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Self-hosted fonts (SIL OFL-1.1). Latin subset only — the full `400.css`
// entry points also pull Cyrillic, Greek and Vietnamese, which this site
// never renders.
import '@fontsource/ibm-plex-sans/latin-400.css'
import '@fontsource/ibm-plex-sans/latin-500.css'
import '@fontsource/ibm-plex-sans/latin-600.css'
import '@fontsource/ibm-plex-mono/latin-400.css'
import '@fontsource/ibm-plex-mono/latin-500.css'
import '@fontsource/ibm-plex-mono/latin-600.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
