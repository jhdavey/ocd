import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
    <>
      <NavBar />
        <Routes>
        <Route path='/' element={<Home />} />
        {/* Catch all path if user navigates to a path that does not exist */}
          <Route path='*' element={<h1 className="display-2">Wrong page!</h1>} />
        </Routes>
      <Footer />
    </>
  </Router>

  );
}

export default App;
