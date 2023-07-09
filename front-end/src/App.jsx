import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './views/About'
import Home from './views/Home'
import OurServices from './views/OurServices'
import Contact from './views/Contact'

export default function App() {
  return (
   <BrowserRouter>
   <div className=''>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/our-services' element={<OurServices />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
   </BrowserRouter>
  )
}
