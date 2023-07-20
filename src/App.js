import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Contato from "./components/pages/Contato";
import Empresa from "./components/pages/Empresa";
import Home from "./components/pages/Home";
import Produtos from "./components/pages/Produtos";

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
     <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Empresa" element={<Empresa /> } />
          <Route exact path="/Produtos" element={<Produtos /> } />
          <Route exact path="/Contato" element={<Contato /> } />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}
export default App;
