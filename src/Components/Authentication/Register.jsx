import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);

    const { createUser, setNameAndPhoto } = useContext(AuthContext);

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
        else{
            console.log("Please Provied a valid password");
        }

    }
    return (
        <div className="w-full  bg-base-200 mx-auto">
            <div className="hero-content flex-col gap-5 ">
                <div className="card shrink-0 w-1/2 shadow-2xl rounded-2xl bg-base-100">
                    <div className="mx-auto my-8 lg:text-left">
                        <h1 className="text-3xl lg:text-5xl font-bold">Register</h1>
                    </div>
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
                            <button className="text-5xl"><FcGoogle /></button>
                            <button className="text-5xl"><FaGithub /></button>
                        </div>
                        {/* <Link to="/registration"><p>Or<span className="underline text-green-400 ml-4">Register</span></p></Link> */}
                    </div>
                    <div className="mx-auto mb-5 mt-6">
                        <Link to="/login"><p>Already have an account? <span className="underline text-green-400">Login</span></p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;