import './App.css';
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/main";
import Gallery from "./pages/gallery";
import Portfolio from "./pages/portfolio";
import NotFound from "./pages/notfound";

function App() {
  return (
    <>
     <HelmetProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
     </HelmetProvider>
    </>
  );
}

export default App;
