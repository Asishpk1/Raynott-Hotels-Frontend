import { Link } from 'react-router-dom'
import phone from '../assets/phone1.png'

const Contact = () => {
  return (
    <>
    <div className='px-md-5 px-3 mb-5 mb-md-0'>
        <h2 className='fw-bold text-center mt-sm-5 mt-4 headings' style={{color:'rgba(220, 90, 10, 1)'}}>Contact Us</h2>
        <p className='text-secondary contents2'>We are committed to providing exceptional, personalized support for every step of your journey. Whether you need assistance with a new reservation, require help modifying an existing booking, or simply have a general inquiry, our global team is ready to assist you 24 hours a day.</p>
        <div className='d-flex justify-content-center mt-sm-5'>
            <img src={phone} alt="" className='contact-photo' style={{width:'50%'}} />
        </div>
        <div className='d-flex flex-wrap align-items-center justify-content-center mt-sm-5 mt-3 gap-4 pb-sm-5'>
            <input className='form-control contact-input'style={{width:'25%'}} type="text" placeholder='Enter your Email' />
            <Link to={'/contact'}><button className='btn'><i className="fa-solid fa-arrow-right"></i></button></Link>
        </div>
    </div>
    </>
  )
}

export default Contact