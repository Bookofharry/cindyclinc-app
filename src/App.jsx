
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Footer from './Ui/Footer.jsx'
import Header from './Ui/Header.jsx'
import Prepage from './pages/Prepage.jsx';
import Home from './pages/Home.jsx';
// import Prepage from './pages/Prepage.jsx'
import NotFound from './pages/Notfound.jsx';





function App(){
  return(
    <BrowserRouter>
    <Header  />


    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='*' element={<NotFound/>} />
      {/* <Route path='/contact' element={<Prepage/>} /> */}
      {/* <Route path='/about' element={<Prepage/>} /> */}
      {/* <Route path='/shop' element={<Prepage/>} /> */}
      

    </Routes>
    <Footer />
    </BrowserRouter>
  )
}
export default App