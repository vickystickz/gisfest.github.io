import './styles/App.css';
import Header from './components/Header/Header';
import React ,{useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/Home/Home';
import Team from './pages/Team/Team';
import Footer from './components/Footer/Footer';
import ReactGA from 'react-ga';

function App() {
  useEffect(()=>{
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
    ReactGA.pageview(window.location.pathname);
},[])
  return (
    <div className="main">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route path="/team" element={<Team />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
