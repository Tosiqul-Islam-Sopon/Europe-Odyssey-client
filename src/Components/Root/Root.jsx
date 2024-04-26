import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div className="flex flex-col justify-between gap-10 min-h-screen">
            <div className="">
                <Navbar></Navbar>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;