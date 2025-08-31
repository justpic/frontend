import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

export const API_URL = '/api'

createRoot(document.getElementById('root')!).render(<App />)
