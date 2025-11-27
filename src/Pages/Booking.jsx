import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import {addBookingAPI } from '../Service/allAPI';

const Booking = () => {

     const [BookingnDetails,setBookingDetails] = useState({name:"",number:"",email:"",destination:"",checkInDate:"",checkOutDate:"",guests:""})
        console.log(BookingnDetails);
    
        const handleBooking = async () =>{
            const {name,number,email,destination,checkInDate,checkOutDate,guests} = BookingnDetails
    
            if(name && number && email && destination && checkInDate && checkOutDate && guests){
                try{
                    const result = await addBookingAPI(BookingnDetails)
                    console.log(result);
                    if(result.status == 200){
                        toast.success("Admission booked")
                        setBookingDetails({name:"",number:"",email:"",destination:"",checkInDate:"",checkOutDate:"",guests:""})
                    }
                    if(result.status == 401){
                        console.log(result.response.data);
                        
                    }
                    
                }
                catch(err){
                    console.log(err);
                    
                }
            }
            else{
                toast.warning("Enter all Fields")
            }
        }
        
  return (
     <>
            <div className='p-md-5 p-3' style={{ background: "linear-gradient(135deg, rgba(187,54,6,1) 0%, rgba(255,120,40,1) 100%)" }}>
                <h1 className='fw-bold text-center pt-md-5 text-light headings' style={{ letterSpacing: '1px' }}>Book Your Stay</h1>
                <p className='text-center text-light opacity-75 m-0 pb-md-5 pb-3 contents'>Experience unparalleled elegance and comfort at our exclusive properties across the globe</p>
                <div className='d-flex justify-content-center'>
                    <div className='d-flex flex-column shadow bg-light p-md-5 p-3 rounded-5 AdmissionBox' style={{ width: '40%' }}>
                        <span className='mb-2 contents' style={{ color: 'rgba(220, 90, 10, 1)', fontWeight: '500' }}>Full Name</span>
                        <input onChange={(e)=>setBookingDetails({...BookingnDetails,name:e.target.value})} value={BookingnDetails.name} type="text" className='form-control rounded-4 opacity-50 mb-4 contents' style={{ border: 'solid 2px rgba(220, 90, 10, 1)' }} placeholder='Enter your name' />
                        <span className='mb-2 contents' style={{ color: 'rgba(220, 90, 10, 1)', fontWeight: '500' }}>Phone Number</span>
                        <input onChange={(e)=>setBookingDetails({...BookingnDetails,number:e.target.value})} value={BookingnDetails.number} type="number" className='form-control rounded-4 opacity-50 mb-4 contents' style={{ border: 'solid 2px rgba(220, 90, 10, 1)' }} placeholder='Enter your Phone number' />
                        <span className='mb-2 contents' style={{ color: 'rgba(220, 90, 10, 1)', fontWeight: '500' }}>Email Address</span>
                        <input onChange={(e)=>setBookingDetails({...BookingnDetails,email:e.target.value})} value={BookingnDetails.email} type="email" className='form-control rounded-4 opacity-50 mb-4 contents' style={{ border: 'solid 2px rgba(220, 90, 10, 1)' }} placeholder='john@example.com' />
                        <span className='mb-2 contents' style={{ color: 'rgba(220, 90, 10, 1)', fontWeight: '500' }}>destination</span>
                        <Form.Select onChange={(e)=>setBookingDetails({...BookingnDetails,destination:e.target.value})} className='form-control rounded-4 opacity-50 mb-4 contents' style={{ border: 'solid 2px rgba(220, 90, 10, 1)' }}  aria-label="Default select example">
                            <option value="">Open this select menu</option>
                            <option value="Raynott Singapore">Raynott Singapore</option>
                            <option value="Raynott Iceland">Raynott Iceland</option>
                            <option value="Raynott Greece">Raynott Greece</option>
                            <option value="Raynott Switzerland">Raynott Switzerland</option>
                            <option value="Raynott Tokyo">Raynott Tokyo</option>
                            <option value="Raynott Dubai">Raynott Dubai</option>
                            <option value="Raynott London">Raynott London</option>
                            <option value="Raynott Paris">Raynott Paris</option>
                        </Form.Select>
                        <span className='mb-2 contents' style={{ color: 'rgba(220, 90, 10, 1)', fontWeight: '500' }}>Check-In-Date </span>
                        <input onChange={(e)=>setBookingDetails({...BookingnDetails,checkInDate:e.target.value})} value={BookingnDetails.checkInDate}  type="date" className='form-control rounded-4 opacity-50 mb-4 contents' style={{ border: 'solid 2px rgba(220, 90, 10, 1)' }} placeholder='Brief description of your health concern' />
                        <span className='mb-2 contents' style={{ color: 'rgba(220, 90, 10, 1)', fontWeight: '500' }}>Check-Out-Date </span>
                        <input onChange={(e)=>setBookingDetails({...BookingnDetails,checkOutDate:e.target.value})} value={BookingnDetails.checkOutDate}  type="date" className='form-control rounded-4 opacity-50 mb-4 contents' style={{ border: 'solid 2px rgba(220, 90, 10, 1)' }} placeholder='Brief description of your health concern' />
                        <span className='mb-2 contents' style={{ color: 'rgba(220, 90, 10, 1)', fontWeight: '500' }}>Guests </span>
                        <input onChange={(e)=>setBookingDetails({...BookingnDetails,guests:e.target.value})} value={BookingnDetails.guests}  type="number" className='form-control rounded-4 opacity-50 mb-4 contents' style={{ border: 'solid 2px rgba(220, 90, 10, 1)' }} placeholder='No.of Guests' />
                        <button onClick={handleBooking} className='btn text-light py-md-3 px-4 rounded-5 mt-md-4 contents' style={{ background: "linear-gradient(135deg, rgba(187,54,6,1) 0%, rgba(255,120,40,1) 100%)" , fontWeight: '500' }}>Book Admission <i className='fa-solid fa-arrow-right'></i></button>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Booking