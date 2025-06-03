
import { ThemeProvider } from './contexts/toggle';
import { FavProvider } from './contexts/fav'; 
import './index.css';
import Home from './pages/Home';
import Fav from './pages/Fav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';

function App() {
  return (
    <ThemeProvider>
      <FavProvider> 
          <div className="min-h-screen">
            <Nav />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fav" element={<Fav />} />
              </Routes>
            </main>
          </div>
      </FavProvider>
    </ThemeProvider>
  );
}

export default App;
