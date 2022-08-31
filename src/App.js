import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";


function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/search" element={<Search />}></Route>
          </Routes>
        </BrowserRouter >
      </div>
    <div className="home-content">
      <Footer />
    </div>
    
    </>
  );
}

export default App;
