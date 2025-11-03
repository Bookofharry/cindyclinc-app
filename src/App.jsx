
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
import ScrollToTop from './Scroll.jsx';
import Frames from './Ui/Frames.jsx';

// function ShopLinks(){
//   return(
//     <nav>

//       <ul>  
//         <Link to='/shop/frames' >Frames</Link>
//         <Link to='/shop/eyedrop' >Eye Drop</Link>
//         <Link to='/shop/lenses' >Lenses</Link>
//         <Link to='/shop/accessories' >Accessories</Link>
//       </ul>
//     </nav>
//   )
// }





function App(){
  const addToCart = (item) => {
    // replace with your cart logic (Redux, Zustand, context, server action, etc.)
    console.log("Added:", item);
  };
  
  return(
    <BrowserRouter>
    <ScrollToTop/>

    <Navbar2  />


    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='*' element={<NotFound/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/shop' element={<Shop/>} >
        <Route path='frames' element={<Frames onAddToCart={addToCart} />} />
        <Route path='eyedrop' element={<h1>Eye Drop Component</h1>} />
        <Route path='lenses' element={<h1>Lenses Component</h1>} />
        <Route path='accessories' element={<h1>Accessories Component</h1>} />

      </Route>
      <Route path='/appointment' element={<Appointment/>} />
      

    </Routes>
    <Footer />
    </BrowserRouter>
  )
}
export default App