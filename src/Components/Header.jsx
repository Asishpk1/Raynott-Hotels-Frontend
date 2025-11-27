import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <Navbar expand='lg' className='p-4 shadow' style={{backgroundColor:'white'}}>
      <Container>
        <Link to={'/'}  className='text-decoration-none'><Navbar.Brand style={{color:'rgba(220, 90, 10, 1)'}} className='fs-4 fw-bolder'> <i className="fa-brands fa-r-project"></i> Raynott <span className='fw-bold fs-5'>Hotels</span></Navbar.Brand></Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className=' d-flex justify-content-center gap-sm-5 gap-2 flex-wrap' style={{fontWeight:'500'}}>
            <Link to={'/'} className=' text-decoration-none  highlight fw-bold contents' style={{color:'rgb(220, 90, 10, 1)'}} >Home</Link>
            <Link to={'/hotels'} className=' text-decoration-none fw-bold highlight contents' style={{color:'rgb(220, 90, 10, 1)'}}>Hotels</Link>
            <Link to={'/booking'} className=' text-decoration-none fw-bold highlight contents' style={{color:'rgb(220, 90, 10, 1)'}}>Booking</Link>
            <Link to={'/contact'} className=' text-decoration-none fw-bold highlight contents' style={{color:'rgb(220, 90, 10, 1)'}}>Contact</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header