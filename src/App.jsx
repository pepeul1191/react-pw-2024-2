import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import AppFooter from './components/AppFooter';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      <Navbar siteName="ULima"/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
      <AppFooter />
    </>
  );
}

export default App;
