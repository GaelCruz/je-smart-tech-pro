import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import './index.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './views/About'
import Home from './views/Home'
import CamAndSec from './views/CamAndSec'
import AutomotiveServices from './views/AutomotiveServices'
import ComfAndControl from './views/ComfAndControl'
import Contact from './views/Contact'

export default function App() {
  return (
   <BrowserRouter>
   <div className=''>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/comfort-and-control' element={<ComfAndControl />} />
        <Route path='/cameras-and-security' element={<CamAndSec />} />
        <Route path='/automotive-services' element={<AutomotiveServices />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
   </BrowserRouter>
  )
}
