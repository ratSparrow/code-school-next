import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./styles/_main.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './App.jsx'
import ScrollToTop from './components/common/ScrollToTop.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScrollToTop />
    <App />
  </StrictMode>,
)
