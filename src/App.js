import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Anime from './components/Anime';
import Upload from './components/Upload';
import Login from './components/Login';
import Signup from './components/Signup';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/animes' element={<Anime />}/>
        <Route  path='/upload' element={<Upload />}/>
        <Route  path='/login' element={<Login />}/>
        <Route  path='/signup' element={<Signup />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App