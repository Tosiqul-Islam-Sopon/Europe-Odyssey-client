import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Profile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={user.photoURL} className="lg:flex-1 max-w-sm rounded-lg shadow-2xl" />
                <div className="lg:flex-1">
                    <h1 className="lg:text-5xl text-2xl font-bold">{user.displayName}</h1>
                    <p className="py-2 text-xl"> <span className="font-bold">Email:</span> {user?.email}</p>
                    <p className="py-2 break-words"> <span className="font-bold">Photo URL:</span> {user?.photoURL}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;