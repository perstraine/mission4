import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Navbar from "./pages/components/Navbar";


function App() {
  return (
    <>
    <Navbar />
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/search" element={<Search />}></Route>
          </Routes>
        </BrowserRouter >
      </div>

    </>
  );
}

export default App;
