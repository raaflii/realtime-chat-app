import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
