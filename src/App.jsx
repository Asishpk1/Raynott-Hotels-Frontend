import {ToastContainer} from 'react-toastify'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Hotels from './Pages/Hotels'
import Booking from './Pages/Booking'

function App() {
  

  return (
    <>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotels' element={<Hotels/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/booking' element={<Booking/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
