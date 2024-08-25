import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import { useEffect } from 'react';
import { Home } from './pages/home/Home';
import FestivalDetails from './pages/FestivalDetails';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Blog from './pages/Blog'; // Importujte Blog komponentu
import { AuthProvider } from './context/AuthContext';

function App() {

  useEffect(() => {
    // Dodajte vaš useEffect kod ovde ako je potrebno
  }, []);

  return (
    <AuthProvider> {/* Obuhvatite celu aplikaciju sa AuthProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="festivalinfo" element={<FestivalDetails />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
