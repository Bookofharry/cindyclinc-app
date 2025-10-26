
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Footer from './Ui/Footer.jsx'
import Navbar2 from './Ui/Header.jsx'
// import Prepage from './pages/Prepage.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/Notfound.jsx';
import Shop from './pages/Shop.jsx';
import About from './pages/About.jsx';
import Appointment from './pages/Appointment.jsx'
import Contact from './pages/Contact.jsx'






function App(){
  return(
    <BrowserRouter>

    <Navbar2  />


    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='*' element={<NotFound/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/appointment' element={<Appointment/>} />
      

    </Routes>
    <Footer />
    </BrowserRouter>
  )
}
export default App