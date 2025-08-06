import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import MainPage from './pages/mainHeader/MainPage';
import LoginPage from './pages/auth/login/LoginPage';
import RegisterPage from './pages/auth/register/RegisterPage';
import HomePage from './pages/home/HomePage';
import AcaraTvPage from './pages/acaraTv/AcaraTvPage';

createRoot(document.getElementById('root')).render(
  <Router>
  <StrictMode>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/beranda" element={<HomePage />} />
      <Route path='/acara-tv' element={<AcaraTvPage />} />
    </Routes>
  </StrictMode>
  </Router>
)
