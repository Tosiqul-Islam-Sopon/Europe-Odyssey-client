import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import DocumentTitle from "../../Title";

const Login = () => {
    DocumentTitle("Login");
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const { logIn, googleSignIn, githubSignIn } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                Swal.fire({
                    title: "Welcome to EuropeOdyssey",
                    text: "Login Successfully",
                    icon: "success"
                });
                console.log(result);
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                Swal.fire({
                    title: "OPPS!!!",
                    text: "Something went wrong",
                    icon: "error"
                });
                console.error(error);
            })
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
                })
            })
    }

    return (
        <div className="w-full  bg-base-200 mx-auto">
            <div className="hero-content flex-col gap-5 ">
                <div className="card shrink-0 w-1/2 shadow-2xl rounded-2xl bg-base-100">
                    <div className="mx-auto my-8 lg:text-left">
                        <h1 className="text-3xl lg:text-5xl font-bold">Login</h1>
                    </div>
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
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
                            <button className="btn bg-[#cf827c] text-white text-xl font-medium">Login</button>
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
                        <Link state={location?.state} to="/register"><p>Don&apos;t have an account? <span className="underline text-green-400">Register</span></p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;