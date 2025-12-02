import { useEffect, useState } from "react";
import { getBookingsAPI } from "../Service/allAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const [bookings, setBookings] = useState([]);

    const navigate = useNavigate()

    const fetchBookings = async () => {
        try {
            const result = await getBookingsAPI();
            console.log(result);
            
            if (result.status === 200) {
                setBookings(result.data);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    const Logout = () =>{
        toast.success("Logged Out Successfully")
        setTimeout(() => {
            navigate('/')
        }, 1500);
    }

    return (
        <div
            className="p-md-5 p-3"
            style={{
                background: "linear-gradient(135deg, rgba(187,54,6,1) 0%, rgba(255,120,40,1) 100%)",
                minHeight: "100vh",}}>
             <h6 className="text-end"><button onClick={Logout} className="btn bg-light rounded-5 fw-bold px-4 contents2">Logout</button></h6>
            <h1
                className="fw-bold text-center pt-md-3 text-light headings"
                style={{ letterSpacing: "1px" }}>
                Booking Management
            </h1>

            <p className="text-center text-light opacity-75 m-0 pb-md-4 pb-3 contents">
                View, monitor and manage all global booking enquiries
            </p>

            <div className="d-flex justify-content-center">
                <div
                    className="shadow bg-light p-md-5 p-3 rounded-5"
                    style={{ width: "90%" }}>
                    <div style={{overflowX:'auto'}}>
                        <table className="table table-bordered table-hover">
                        <thead
                            className="text-light"
                            style={{
                                background: "linear-gradient(135deg, rgba(187,54,6,1) 0%, rgba(255,120,40,1) 100%)",
                            }}>
                            <tr className="contents">
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Destination</th>
                                <th>Check-In</th>
                                <th>Check-Out</th>
                                <th>Guests</th>
                                <th>Submitted On</th>
                            </tr>
                        </thead>

                        <tbody className="contents">
                            {bookings.length > 0 ? (
                                bookings.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.number}</td>
                                        <td>{item.email}</td>
                                        <td>{item.destination}</td>
                                        <td>{item.checkInDate}</td>
                                        <td>{item.checkOutDate}</td>
                                        <td>{item.guests}</td>
                                        <td>
                                            {item.createdAt
                                                ? new Date(item.createdAt).toLocaleString()
                                                : "--"}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center py-4 text-secondary">
                                        No booking enquiries found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
