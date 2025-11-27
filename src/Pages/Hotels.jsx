import { Button } from 'react-bootstrap'
import hotelCard from '../assets/hotelCard.jpg'
import hotelCard1 from '../assets/hotelCard1.jpg'
import hotelCard2 from '../assets/hotelCard2.jpg'
import hotelCard3 from '../assets/hotelCard3.jpg'
import hotelCard4 from '../assets/hotelCard4.jpg'
import hotelCard5 from '../assets/hotelCard5.jpg'
import hotelCard6 from '../assets/hotelCard6.jpg'
import hotelCard7 from '../assets/hotelCard7.jpg'

const Hotels = () => {
  return (
    <>
    <div className='p-md-5 p-3'>
        <h1 className='text-center' style={{color:'rgba(220, 90, 10, 1)'}}>Our Unique Stays</h1>
        <div className='mt-md-5 mt-3'>
            <div className='row d-flex justify-content-center mb-5'>
                <div className="col-md-3">
                    <img src={hotelCard} alt="" className='w-100 rounded-5'/>
                </div>
                <div className="col-md-4">
                    <h3 style={{color:'rgba(220, 90, 10, 1)'}}>Raynott Singapore</h3>
                    <p className='contents2'>A modern blend of luxury, smart comfort, and effortless access to Singapore’s best</p>
                    <Button className='rounded-5 border-0 fw-bold contents2' style={{background: "linear-gradient(135deg, rgba(187,54,6,1) 0%, rgba(255,120,40,1) 100%)" }}>Book Your Stay</Button>
                </div>
            </div>
            <div className='row d-flex justify-content-center mb-5'>
                <div className="col-md-3">
                    <img src={hotelCard1} alt="" className='w-100 rounded-5'/>
                </div>
                <div className="col-md-4">
                    <h3 style={{color:'rgba(220, 90, 10, 1)'}}>Raynott Iceland</h3>
                    <p className='contents2'>Modern comfort surrounded by Iceland’s dramatic landscapes and peaceful atmosphere</p>
                    <Button className='rounded-5 border-0 fw-bold contents2' style={{background: "linear-gradient(135deg, rgba(187,54,6,1) 0%, rgba(255,120,40,1) 100%)" }}>Book Your Stay</Button>
                </div>
            </div>
            <div className='row d-flex justify-content-center mb-5'>
                <div className="col-md-3">
                    <img src={hotelCard2} alt="" className='w-100 rounded-5'/>
                </div>
                <div className="col-md-4">
                    <h3 style={{color:'rgba(220, 90, 10, 1)'}}>Raynott Greece</h3>
                    <p className='contents2'>Contemporary comfort inspired by Greece’s coastline, culture, and timeless charm</p>
                    <Button className='rounded-5 border-0 fw-bold contents2' style={{background: "linear-gradient(135deg, rgba(187,54,6,1) 0%, rgba(255,120,40,1) 100%)" }}>Book Your Stay</Button>
                </div>
            </div>
            <div className='row d-flex justify-content-center mb-5'>
                <div className="col-md-3">
                    <img src={hotelCard3} alt="" className='w-100 rounded-5'/>
                </div>
                <div className="col-md-4">
                    <h3 style={{color:'rgba(220, 90, 10, 1)'}}>Raynott Switzerland</h3>
                    <p className='contents2'>Modern comfort wrapped in alpine serenity, crisp air, and breathtaking mountain views</p>
                    <Button className='rounded-5 border-0 fw-bold contents2' style={{background: "linear-gradient(135deg, rgba(187,54,6,1) 0%, rgba(255,120,40,1) 100%)" }}>Book Your Stay</Button>
                </div>
            </div>
            <div className='row d-flex justify-content-center mb-5'>
                <div className="col-md-3">
                    <img src={hotelCard4} alt="" className='w-100 rounded-5'/>
                </div>
                <div className="col-md-4">
                    <h3 style={{color:'rgba(220, 90, 10, 1)'}}>Raynott Tokyo</h3>
                    <p className='contents2'> Sleek, smart hospitality surrounded by neon streets, culture, and cutting-edge city life</p>
                    <Button className='rounded-5 border-0 fw-bold contents2' style={{background: "linear-gradient(135deg, rgba(187,54,6,1) 0%, rgba(255,120,40,1) 100%)" }}>Book Your Stay</Button>
                </div>
            </div>
            <div className='row d-flex justify-content-center mb-5'>
                <div className="col-md-3">
                    <img src={hotelCard5} alt="" className='w-100 rounded-5'/>
                </div>
                <div className="col-md-4">
                    <h3 style={{color:'rgba(220, 90, 10, 1)'}}>Raynott Dubai</h3>
                    <p className='contents2'>Stylish comfort with access to luxe malls, iconic architecture, and world-class experiences</p>
                    <Button className='rounded-5 border-0 fw-bold contents2' style={{background: "linear-gradient(135deg, rgba(187,54,6,1) 0%, rgba(255,120,40,1) 100%)" }}>Book Your Stay</Button>
                </div>
            </div>
            <div className='row d-flex justify-content-center mb-5'>
                <div className="col-md-3">
                    <img src={hotelCard6} alt="" className='w-100 rounded-5'/>
                </div>
                <div className="col-md-4">
                    <h3 style={{color:'rgba(220, 90, 10, 1)'}}>Raynott London</h3>
                    <p className='contents2'>Contemporary warmth set close to historic landmarks, vibrant streets, and cultural hotspots</p>
                    <Button className='rounded-5 border-0 fw-bold contents2' style={{background: "linear-gradient(135deg, rgba(187,54,6,1) 0%, rgba(255,120,40,1) 100%)" }}>Book Your Stay</Button>
                </div>
            </div>
            <div className='row d-flex justify-content-center mb-5'>
                <div className="col-md-3">
                    <img src={hotelCard7} alt="" className='w-100 rounded-5'/>
                </div>
                <div className="col-md-4">
                    <h3 style={{color:'rgba(220, 90, 10, 1)'}}>Raynott Paris</h3>
                    <p className='contents2'>Contemporary elegance steps away from art, fashion, and the timeless charm of the city</p>
                    <Button className='rounded-5 border-0 fw-bold contents2' style={{background: "linear-gradient(135deg, rgba(187,54,6,1) 0%, rgba(255,120,40,1) 100%)" }}>Book Your Stay</Button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hotels