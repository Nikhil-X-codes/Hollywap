import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MovieCard from "./Component";
import Home from "./Home";
import Navbar from "./Navbar";
import Fav from "./Fav";
import "./index.css";
import { FavoriteProvider } from "./FavoriteContext";

function App() {
  return (
    <FavoriteProvider> 
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/fav" element={<Fav />} />
        </Routes>
      </Router>
    </FavoriteProvider>
  );
}

export default App;
