import './styles/App.css';
import Header from './components/Header';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="main">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/team" element={<Team />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
