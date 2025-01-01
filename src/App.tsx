import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catolog/Catalog";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
function App() {
  return (
    <BrowserRouter>
      <Header /> {/* Заголовок с навигацией */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
