import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import { useEffect } from 'react'
import { Home } from './pages/home/Home';
import FestivalDetails from './pages/FestivalDetails';
import Contact from './pages/Contact';

function App() {

  useEffect(() => {

  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="festivalinfo" element={<FestivalDetails />} />
          <Route path="contact" element={<Contact />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
