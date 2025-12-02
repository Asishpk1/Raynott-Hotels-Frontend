import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import { AdminLoginAPI } from "../Service/allAPI";
import homeImg from "../assets/home5.jpg";

const AdminLogin = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!data.email || !data.password) {
            toast.warning("Enter all fields");
            return;
        }

        try {
            const result = await AdminLoginAPI(data);
            console.log(result);
            
            if (result.status === 200) {
                toast.success("Successfully Logged In");
                setTimeout(() => navigate("/dashboard"), 1200);
                setData({email: "", password: ""})
            }
            if (result.status === 401) {
                toast.success(result.response.data);
                setData({email: "", password: ""})
            }
        } catch (err) {
            console.log(err);
            toast.error("Invalid Credentials");
        }
    };

    return (
        <div
            style={{
                backgroundImage: `url(${homeImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                backdropFilter: "blur(1px)",
            }}
            className="d-flex justify-content-center align-items-center p-3"
        >
            <div
                className="shadow rounded-5 p-5"
                style={{
                    width: "420px",
                    backgroundColor: "rgba(255,255,255,0.1)", border:'solid 2px rgba(255,255,255,0.3)'
                }}
            >
                <h5
                    className="mb-2 fw-semibold contents"
                    style={{ color: "rgba(220, 90, 10, 1)" }}
                >
                    <i className="fa-brands fa-r-project"></i> Admin Portal
                </h5>

                <h1
                    className="fw-bold headings"
                    style={{ fontSize: "38px", color: "rgba(220, 90, 10, 1)" }}
                >
                    Login
                </h1>

                <p className="text-light opacity-75 contents mb-4">
                    Access and manage Bookings.
                </p>

                {/* Email */}
                <div className="mb-3">
                    <label className="contents fw-semibold text-light">Email Address</label>
                    <input
                        type="email"
                        className="form-control p-2 contents rounded-5 bg-transparent loginInput text-light"
                        placeholder="Enter your email"
                        value={data.email}
                        onChange={(e) =>
                            setData({ ...data, email: e.target.value })
                        }
                        style={{ border: 'solid 2px rgba(255,255,255,0.3)'  }}
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label className="contents fw-semibold text-light">Password</label>
                    <input
                        type="password"
                        className="form-control p-2 contents rounded-5 bg-transparent loginInput text-light"
                        placeholder="Enter your password"
                        value={data.password}
                        onChange={(e) =>
                            setData({ ...data, password: e.target.value })
                        }
                        style={{ border: 'solid 2px rgba(255,255,255,0.3)'  }}
                    />
                </div>

                <Button
                    className="w-100 rounded-5 contents shadow border-0"
                    style={{
                        backgroundColor: "rgba(220, 90, 10, 1)",
                        padding: "12px",
                        fontSize: "16px",
                    }}
                    onClick={handleLogin}
                >
                    Login <i className="fa-solid fa-arrow-right ms-2"></i>
                </Button>

                {/* Optional: Back to Home */}
                <p className="text-center mt-3 contents">
                    <Link className="text-decoration-none text-light" to="/" >
                        ← Back to Home
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default AdminLogin;
