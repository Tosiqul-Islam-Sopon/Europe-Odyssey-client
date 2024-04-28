import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { MdEmail } from "react-icons/md";
import { FaImage } from "react-icons/fa6";

const Profile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={user.photoURL} className="flex-1 max-w-sm rounded-lg shadow-2xl" />
                <div className="flex-1">
                    <h1 className="text-5xl font-bold">{user.displayName}</h1>
                    <p className="py-6 flex items-center gap-2"><span className="text-xl"><MdEmail></MdEmail></span> {user.email}</p>
                    <p className="break-words flex items-center gap-4"><span className="text-2xl"><FaImage></FaImage></span> {user.photoURL}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;