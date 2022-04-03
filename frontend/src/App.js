import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import Blog from './views/Blog';
import Teste from './views/Teste';
import Contato from './views/Contato';


function App() {
  return (
    <div className="App overflow-hidden">
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/teste" element={<Teste />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
      </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
