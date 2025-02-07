import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import DocumentTitle from "../../Title";
import { Bounce, Fade } from "react-awesome-reveal";

const Register = () => {
    DocumentTitle("Registration");
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const { createUser, setNameAndPhoto, googleSignIn, githubSignIn } = useContext(AuthContext);

    const validatePassword = (password) => {
        if (password.length < 6) {
            // swal("Error!", "Password must contain at least 6 character!", "error");
            return false;
        }
        if (!/[A-Z]/.test(password)) {
            // swal("Error!", "Password must contain a capital letter!", "error");
            return false;
        }
        if (!/[a-z]/.test(password)) {
            // swal("Error!", "Password must contain a small letter!", "error");
            return false;
        }
        return true;
    };

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const url = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (validatePassword(password)) {
            createUser(email, password)
                .then(result => {
                    console.log(result);
                    setNameAndPhoto(name, url)
                        .then(res => {
                            console.log(res);
                            Swal.fire({
                                title: "Welcome to EuropeOdyssey",
                                text: "Registration Successful",
                                icon: "success"
                            });
                            navigate(location?.state ? location.state : "/");
                        })
                        .catch(error => {
                            console.log(error);
                            // swal("Error!", "Uppsss! Somethig went wrong", "error");
                        })
                })
                .catch(error => {
                    console.log(error);
                    // swal("Error!", "Uppsss! Somethig went wrong", "error");
                })
        }
        else {
            Swal.fire({
                title: "Sorry!",
                text: "Please provide a password with at least 6 characters with one small letter and one capital letter",
                icon: "error"
            });
        }

    }

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(res => {
                console.log(res);
                
                Swal.fire({
                    title: "Welcome to EuropeOdyssey",
                    text: "Login Successfully",
                    icon: "success"
                });
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    title: "OPPS!!!",
                    text: "Something went wrong",
                    icon: "error"
                });
            })
    }

    const handleGithubLogin = () => {
        githubSignIn()
            .then(res => {
                console.log(res);
                Swal.fire({
                    title: "Welcome to EuropeOdyssey",
                    text: "Login Successfully",
                    icon: "success"
                });
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    title: "OPPS!!!",
                    text: "Something went wrong",
                    icon: "error"
                });
            })
    }
    return (
        <Fade>
            <div className="w-full  bg-base-200 mx-auto">
                <div className="hero-content flex-col gap-5 ">
                    <div className="card shrink-0 lg:w-1/2 shadow-2xl rounded-2xl bg-base-100">
                        <Bounce>
                            <div className="mx-auto my-8 lg:text-left text-center">
                                <h1 className="text-3xl lg:text-5xl text-center font-bold">Register</h1>
                            </div>
                        </Bounce>
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                    <span className="absolute bottom-4 right-3"
                                        onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ?
                                                <FaEye></FaEye>
                                                :
                                                <FaEyeSlash></FaEyeSlash>
                                        }
                                    </span>
                                </label>
                                <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-[#cf827c] text-white text-xl font-medium">Register</button>
                            </div>
                        </form>
                        <div className="flex flex-col space-y-3 w-full justify-center items-center">
                            <p>Or Continue with</p>
                            <div className="space-x-6">
                                <button onClick={handleGoogleLogin} className="text-5xl"><FcGoogle /></button>
                                <button onClick={handleGithubLogin} className="text-5xl"><FaGithub /></button>
                            </div>
                            {/* <Link to="/registration"><p>Or<span className="underline text-green-400 ml-4">Register</span></p></Link> */}
                        </div>
                        <div className="mx-auto mb-5 mt-6">
                            <Link to="/login"><p>Already have an account? <span className="underline text-green-400">Login</span></p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Register;