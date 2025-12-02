import { Link } from 'react-router-dom'

const Footer = () => {
  return (
     <>
    <div className=' container-fluid footer' style={{backgroundColor:'rgba(36, 34, 34, 1)'}}>
        <div className='d-flex justify-content-around pt-4 row w-100 m-0 sec-section'>

        {/* Raynott Section   */}
        <div className='col-md-5 px-md-3 px-sm-0'>
           <Link className='text-decoration-none text-light' to={'/'}>
            <i style={{fontSize:'30px', fontWeight:'600'}} className="fa-solid fa-building-columns headings"></i>
            <span className='ms-3 headings' style={{fontSize:'30px', fontWeight:'600'}}>Raynott <span style={{fontSize:'20px'}}>Hotels</span></span>
           </Link> <br /> <br />
            <p className='text-secondary m-0 contents' style={{textAlign:'justify'}}>Experience the Raynott difference wherever you travel. From bustling city centers to tranquil resorts, book your perfect stay with confidence and best-price assurance. We manage over 500 premier properties across 40 countries, dedicated to making every trip unforgettable.</p>
        </div>

        {/* Links Section */}
        <div className='col-md-1 mt-3 px-3 px-sm-0 text-light'>
            <h5 className='fw-bold contents'>Links</h5>
            <Link className='text-secondary contents2' style={{textDecoration:'none'}} to={'/'}>Home</Link> <br />
            <Link className='text-secondary contents2' style={{textDecoration:'none'}} to={'/hotels'}>Hotels</Link> <br />
            <Link className='text-secondary contents2' style={{textDecoration:'none'}} to={'/about'}>About Us</Link>
        </div>

        {/* Know More Section */}
        <div className='col-md-1 mt-3 px-3 px-sm-0'>
            <h5 className='fw-bold text-light contents'>Know More</h5>
            <Link className='text-secondary contents2' style={{textDecoration:'none'}} to={'/'}>Privacy Policy</Link> <br />
            <Link className='text-secondary contents2' style={{textDecoration:'none'}} to={'/contact'}>Contact Us</Link>
        </div>
    </div>
    
    <p className='text-center w-100 p-0 m-0 text-secondary mt-2 contents2'>Copyright &copy; 2025 <strong>Raynott</strong> | Designed by <strong>Asish</strong></p>
    </div>
    </>
  )
}

export default Footer