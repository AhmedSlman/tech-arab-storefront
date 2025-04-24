
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Enable RTL direction globally
document.documentElement.dir = "rtl";
document.documentElement.lang = "ar";

createRoot(document.getElementById("root")!).render(<App />);
