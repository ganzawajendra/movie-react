import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from './pages/home/HomePage';

createRoot(document.getElementById('root')).render(
  <Router>
  <StrictMode>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </StrictMode>
  </Router>
)
