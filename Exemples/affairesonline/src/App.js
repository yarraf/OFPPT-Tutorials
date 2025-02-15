import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";
import Content from "./components/content/content";
import Home from "./components/dynamicComponents/home";
import About from "./components/dynamicComponents/about";
import Contact from "./components/dynamicComponents/contact";
import Login from './components/login/login';
import AnnonceByReg from './components/annonesByReg.js';
import DiffuserAnn from './components/addAnnonce.js';
import AdminAnn from './components/adminAnn.js';
import AnnonceDetail from './components/annonceDetail.js';
import UpdateAnn from './components/updateAnn.js';
function App() {
  return (
    // <Annonces></Annonces>
     <Router>
    <Header />
    <Menu />
    <Content />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<AnnonceByReg />} />
      <Route path="/add" element={<DiffuserAnn />} />
      <Route path="/manage" element={<AdminAnn />} />
      <Route path="/annonce/:id" element={<AnnonceDetail />} />
      <Route path="/upd/:id" element={<UpdateAnn />} />
    </Routes>
    <Footer />
   </Router>
  );
}

export default App;
