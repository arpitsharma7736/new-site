import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./components/style.css"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import History from './components/History'
import Gallery from './components/Gallery'
import Goals from './components/Goals'
function App() {
  return (
    <>

    <BrowserRouter>
    <Header/>
    <Routes>
     
      <Route path='' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/gallery' element={<Gallery/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/history' element={<History/>}></Route>
      <Route path='/goals' element={<Goals/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App