import { BsGithub } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaPhone, FaYoutube } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const Footer = () => {
    return (
        <div className=" bg-neutral text-neutral-content p-10 space-y-5">
            <div className="w-fit mx-auto text-center">
                <h1 className="text-3xl font-bold">EuropeOdyssey</h1>
                <p>Copyright © 2024 - All right reserved by EuropeOdyssey</p>
            </div>
            <div className="mx-auto text-center lg:flex lg:justify-between space-y-5">
                <div className="">
                    <p className="font-bold text-xl">Contact with us:</p>
                    <p className="flex gap-2 items-center w-fit mx-auto"><MdMail></MdMail> europeodyssey.help@yahoo.com</p>
                    <p className="flex gap-2 items-center w-fit mx-auto"><FaPhone></FaPhone> +0035867523</p>
                </div>
                <div className="space-y-2">
                    <p className="text-xl font-bold">Connect with us:</p>
                    <p className="flex gap-3 text-3xl w-fit mx-auto"><FaFacebook></FaFacebook> <FaInstagram></FaInstagram> <FaYoutube></FaYoutube> <BsGithub></BsGithub></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;