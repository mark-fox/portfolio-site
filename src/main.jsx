import App from './App.jsx'
import './index.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'; 
import React from 'react';
import "animate.css";

AOS.init()


// Set dark mode based on user preference
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
