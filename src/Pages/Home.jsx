import homeImg from '../assets/home5.jpg'
import sec1 from '../assets/sec0.jpg'
import sec2 from '../assets/sec1.jpg'
import quote from '../assets/quote.png'
import hotelCard from '../assets/hotelCard.jpg'
import hotelCard1 from '../assets/hotelCard1.jpg'
import hotelCard2 from '../assets/hotelCard2.jpg'
import hotelCard3 from '../assets/hotelCard3.jpg'
import hotelCard4 from '../assets/hotelCard4.jpg'
import hotelCard5 from '../assets/hotelCard5.jpg'
import hotelCard6 from '../assets/hotelCard6.jpg'
import hotelCard7 from '../assets/hotelCard7.jpg'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addReviewAPI, getAllReviewsAPI } from '../Service/allAPI'
import { toast } from 'react-toastify'

const Home = () => {

  const [show, setShow] = useState(false);
  const [reviewDetails, setReviewDetails] = useState({ name: "", program: "", feedback: "" })
  const [allReviews, setAllReviews] = useState([])
  const [addResponse, setAddResponse] = useState({})

  const handleClose = () => {
    setReviewDetails({ name: "", program: "", feedback: "" })
    setShow(false);
  }
  const handleShow = () => setShow(true);



  const addReview = async () => {
    const { name, program, feedback } = reviewDetails

    if (name && program && feedback) {
      try {
        const result = await addReviewAPI(reviewDetails)
        console.log(result);
        if (result.status == 200) {
          toast.success("Review Added")
          setReviewDetails({ name: "", program: "", feedback: "" })
          handleClose()
          setAddResponse(result)
          getAllReviews()
        }
        if (result.status == 406) {
          toast.error(result.response.data)
          setReviewDetails({ name: '', program: '', feedback: '' })
        }

      }
      catch (err) {
        console.log(err);

      }
    }
    else {
      toast.error("Enter all fields")
    }
  }

  useEffect(() => {
    getAllReviews()
  }, [addResponse])


  const getAllReviews = async () => {
    try {
      const result = await getAllReviewsAPI()
      console.log(result);
      if (result.status == 200) {
        setAllReviews(result.data)
      }

    }
    catch (err) {
      console.log(err);

    }
  }
  return (
    <>
      <div>

        {/* First Section */}
        <div className='container-fluid'>
          <div className='row p-sm-5 d-flex justify-content-between align-items-end home-banner' style={{ backgroundImage: `url(${homeImg})`, height: '640px', backgroundSize: 'cover', color: 'white', backgroundPosition: 'center' }}>
            <div className="col-md-6">
              <h5 className='mb-3'><i className="fa-brands fa-r-project"></i> Elevating Comfort Across Continents</h5>
              <h1 className='main-head fw-bold' style={{ fontSize: '58px' }}>Luxury Redefined,
                Worldwide</h1>
              <h4>Experience unparalleled elegance and comfort at our exclusive properties across the globe</h4>
              <Link to={'/hotels'}><button className='btn text-light py-2 px-3 rounded-5 fw-bold shadow contents' style={{ background: "linear-gradient(135deg, rgba(187,54,6,1) 0%, rgba(255,120,40,1) 100%)" }}>Discover Our Hotels <i className='fa-solid fa-arrow-right'></i></button></Link>
            </div>
            <div className="col-md-3">
              <Link to={'/booking'}><button className='btn text-light py-2 px-3 rounded-5 fw-bold shadow contents' style={{ background: "linear-gradient(135deg, rgba(187,54,6,1) 0%, rgba(255,120,40,1) 100%)" }}>Plan Your Getaway <i className='fa-solid fa-arrow-right'></i></button></Link>
              <hr />
            </div>

          </div>
        </div> <br />

        {/* Second Section */}
        <div className="container-fluid">
          <div className='row d-flex justify-content-center align-items-center gap-2 mt-5 pt-sm-5'>
            <div className="col-md-5 d-flex gap-4 justify-content-center">
              <img src={sec1} alt="" style={{ width: '45%' }} className='rounded-5 shadow' />
              <img src={sec2} alt="" style={{ width: '45%' }} className='rounded-5 shadow' />
            </div>
            <div className="col-md-5 sec-section">
              <h5 className='mb-3 mt-3 mt-md-0 contents' style={{ color: 'rgba(220, 90, 10, 1)' }}>Elevating Comfort Across Continents</h5>
              <h1 className='fw-bold headings'>About Raynott Hotels</h1>
              <p className='text-secondary contents2' style={{ textAlign: 'justify' }}>Raynott International Hotels offers a modern, world-class hospitality experience built around comfort, efficiency, and global standards. Every property is designed to deliver exceptional stays through thoughtful design, advanced amenities, and seamless service that meets the expectations of today’s travelers.</p>
              <p className='text-secondary contents2' style={{ textAlign: 'justify' }}>Our hotels blend contemporary luxury with practical convenience—smart rooms, premium facilities, and a service culture shaped by professionalism and attention to detail. Whether for business or leisure, guests experience reliability, elegance, and hospitality that goes beyond the ordinary. At Raynott International Hotels, every stay reflects our commitment to quality, innovation, and worldwide excellence.</p>
              <Link to={'/booking'}><button className='btn text-light fw-bold w-100 py-2 px-3 rounded-5 mt-md-4 shadow contents2' style={{ background: "linear-gradient(135deg, rgba(187,54,6,1) 0%, rgba(255,120,40,1) 100%)" }}>Plan Your Getaway <i className='fa-solid fa-arrow-right'></i></button></Link>
            </div>
          </div>
        </div>

        {/* Third Section */}
        <div className='d-flex justify-content-center container-fluid mt-5 pt-sm-5'>
          <div className='row d-flex w-100 justify-content-around align-item-center py-md-5 p-4 third-section rounded-5 shadow' style={{ background: "linear-gradient(135deg, rgba(187,54,6,1) 0%, rgba(255,120,40,1) 100%)" }}>
            <div className='text-light text-center col-sm-3 mb-3 mb-sm-0'>
              <i className="fa-solid fa-wifi fa-2xl"></i>
              <h4 className='contents mt-2'>Free High-Speed WiFi</h4>
            </div>
            <div className='text-light text-center col-sm-3  mb-3 mb-sm-0'>
              <i class="fa-solid fa-mug-saucer fa-2xl"></i>
              <h4 className='contents mt-2'>Complimentary Breakfast</h4>
            </div>

            <div className='text-light text-center col-sm-3  mb-3 mb-sm-0'>
              <i class="fa-solid fa-dumbbell fa-2xl"></i>
              <h4 className='contents mt-2'>24/7 Fitness Center</h4>
            </div>
            <div className='text-light text-center col-sm-3  mb-3 mb-sm-0'>
              <i class="fa-solid fa-utensils fa-2xl"></i>
              <h4 className='contents mt-2'>Fine Dining Restaurant</h4>
            </div>

          </div>
        </div>

        {/* Global Section */}
        <div>
          <h1 className='text-center mt-5 pt-sm-5 mb-2 fw-bold headings'>Our Global Collection</h1>
          <h4 className='contents text-center' style={{ color: 'rgb(11,11,11,0.6)' }}>Discover luxury accommodations in the world's most captivating destinations</h4>
          <div className='d-flex flex-wrap gap-5 justify-content-around mt-3 mt-md-5 px-5'>
            <Card className='shadow border-0 rounded-5' style={{ width: '18rem',overflow:'hidden' }}>
              <Card.Img variant="top" src={hotelCard} />
              <Card.Body>
                <Card.Title>Raynott Singapore</Card.Title>
                <Card.Text className='contents2'>
                 A modern blend of luxury, smart comfort, and effortless access to Singapore’s best
                </Card.Text>
                <Link to={'/hotels'}><Button className='rounded-5 border-0 fw-bold' style={{background: "linear-gradient(135deg, rgba(187,54,6,1) 0%, rgba(255,120,40,1) 100%)" }}>Explore</Button></Link>
              </Card.Body>
            </Card>

            <Card className='shadow border-0 rounded-5' style={{ width: '18rem',overflow:'hidden' }}>
              <Card.Img variant="top" src={hotelCard1} />
              <Card.Body>
                <Card.Title>Raynott Iceland</Card.Title>
                <Card.Text className='contents2'>
                Modern comfort surrounded by Iceland’s dramatic landscapes and peaceful atmosphere
                </Card.Text>
                 <Link to={'/hotels'}><Button className='rounded-5 border-0 fw-bold' style={{background: "linear-gradient(135deg, rgba(187,54,6,1) 0%, rgba(255,120,40,1) 100%)" }}>Explore</Button></Link>
              </Card.Body>
            </Card>

            <Card className='shadow border-0 rounded-5' style={{ width: '18rem',overflow:'hidden' }}>
              <Card.Img variant="top" src={hotelCard2} />
              <Card.Body>
                <Card.Title>Raynott Greece</Card.Title>
                <Card.Text className='contents2'>
                Contemporary comfort inspired by Greece’s coastline, culture, and timeless charm
                </Card.Text>
                 <Link to={'/hotels'}><Button className='rounded-5 border-0 fw-bold' style={{background: "linear-gradient(135deg, rgba(187,54,6,1) 0%, rgba(255,120,40,1) 100%)" }}>Explore</Button></Link>
              </Card.Body>
            </Card>

            <Card className='shadow border-0 rounded-5' style={{ width: '18rem',overflow:'hidden' }}>
              <Card.Img variant="top" src={hotelCard3} />
              <Card.Body>
                <Card.Title>Raynott Switzerland</Card.Title>
                <Card.Text className='contents2'>
                Modern comfort wrapped in alpine serenity, crisp air, and breathtaking mountain views
                </Card.Text>
                 <Link to={'/hotels'}><Button className='rounded-5 border-0 fw-bold' style={{background: "linear-gradient(135deg, rgba(187,54,6,1) 0%, rgba(255,120,40,1) 100%)" }}>Explore</Button></Link>
              </Card.Body>
            </Card>

            <Card className='shadow border-0 rounded-5' style={{ width: '18rem',overflow:'hidden' }}>
              <Card.Img variant="top" src={hotelCard4} />
              <Card.Body>
                <Card.Title>Raynott Tokyo</Card.Title>
                <Card.Text className='contents2'>
                Sleek, smart hospitality surrounded by neon streets, culture, and cutting-edge city life
                </Card.Text>
                 <Link to={'/hotels'}><Button className='rounded-5 border-0 fw-bold' style={{background: "linear-gradient(135deg, rgba(187,54,6,1) 0%, rgba(255,120,40,1) 100%)" }}>Explore</Button></Link>
              </Card.Body>
            </Card>

            <Card className='shadow border-0 rounded-5' style={{ width: '18rem',overflow:'hidden' }}>
              <Card.Img variant="top" src={hotelCard5} />
              <Card.Body>
                <Card.Title>Raynott Dubai</Card.Title>
                <Card.Text className='contents2'>
                Stylish comfort with access to luxe malls, iconic architecture, and world-class experiences
                </Card.Text>
                 <Link to={'/hotels'}><Button className='rounded-5 border-0 fw-bold' style={{background: "linear-gradient(135deg, rgba(187,54,6,1) 0%, rgba(255,120,40,1) 100%)" }}>Explore</Button></Link>
              </Card.Body>
            </Card>

            <Card className='shadow border-0 rounded-5' style={{ width: '18rem',overflow:'hidden' }}>
              <Card.Img variant="top" src={hotelCard6} />
              <Card.Body>
                <Card.Title>Raynott London</Card.Title>
                <Card.Text className='contents2'>
                 Contemporary warmth set close to historic landmarks, vibrant streets, and cultural hotspots
                </Card.Text>
                 <Link to={'/hotels'}><Button className='rounded-5 border-0 fw-bold' style={{background: "linear-gradient(135deg, rgba(187,54,6,1) 0%, rgba(255,120,40,1) 100%)" }}>Explore</Button></Link>
              </Card.Body>
            </Card>

            <Card className='shadow border-0 rounded-5' style={{ width: '18rem',overflow:'hidden' }}>
              <Card.Img variant="top" src={hotelCard7} />
              <Card.Body>
                <Card.Title>Raynott Paris</Card.Title>
                <Card.Text className='contents2'>
                Contemporary elegance steps away from art, fashion, and the timeless charm of the city
                </Card.Text>
                 <Link to={'/hotels'}><Button className='rounded-5 border-0 fw-bold' style={{background: "linear-gradient(135deg, rgba(187,54,6,1) 0%, rgba(255,120,40,1) 100%)" }}>Explore</Button></Link>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* Reviews Section */}
        <div className='mt-md-5 p-5'>
          <h1 className='text-center fw-bold headings' style={{ color: 'rgba(220, 90, 10, 1)' }}>Real Stays. Real Feedback.</h1>
          <p className='text-secondary text-center m-0 contents'>What Our Guests Loved</p>
          <div className='mt-md-5 mt-3 d-flex flex-wrap gap-3 justify-content-around align-items-center'>
            {allReviews.length > 0 ?
              allReviews.map((review, index) => (
                <Card key={index} className='border-0 rounded-5 shadow' style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title className='contents' style={{ color: 'rgba(220, 90, 10, 1)' }}>★ ★ ★ ★ ★</Card.Title>
                    <Card.Text className='contents'>
                      {review.feedback}
                    </Card.Text>
                    <div className=' row d-flex justify-content-between align-items-center'>
                      <div className='col-8'>
                        <span className='contents'>{review.name}</span> <br />
                        <span className='contents'>{review.program}</span>
                      </div>
                      <div className='col-4'>
                        <img src={quote} alt="" className='w-100' />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))
              :
              <h1 className='text-secondary'>No Feedbacks found</h1>}
          </div>

          <div className=' d-flex justify-content-center'>
            <button onClick={handleShow} className='btn mt-md-5 mt-4 fw-bold text-light px-md-4 rounded-5 contents' style={{ background: "linear-gradient(135deg, rgba(187,54,6,1) 0%, rgba(255,120,40,1) 100%)" }}>Add Feedback</button>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title className='contents'>Add Feedback</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <input value={reviewDetails.name} onChange={(e) => setReviewDetails({ ...reviewDetails, name: e.target.value })} type="text" className='form-control mb-3 contents' placeholder='Name' />
                <input value={reviewDetails.program} onChange={(e) => setReviewDetails({ ...reviewDetails, program: e.target.value })} type="text" className='form-control mb-3 contents' placeholder='Property' />
                <input value={reviewDetails.feedback} onChange={(e) => setReviewDetails({ ...reviewDetails, feedback: e.target.value })} type="text" className='form-control mb-3 contents' placeholder='Feedback' />
              </Modal.Body>
              <Modal.Footer>
                <Button className='contents' variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button className='border-0 px-5 contents' onClick={addReview} style={{ background: "linear-gradient(135deg, rgba(187,54,6,1) 0%, rgba(255,120,40,1) 100%)" }}>Add Feedback</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home