import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {
  return (<div>
        <div className="bg-slate-900">
          <Navbar/>
        </div>
        <Routes>
          <Route path="/rkshop-reactapp/" element={<Home/>} />
          <Route path="/rkshop-reactapp/cart" element={<Cart/>} />
        </Routes>
  </div>)
};

export default App;
