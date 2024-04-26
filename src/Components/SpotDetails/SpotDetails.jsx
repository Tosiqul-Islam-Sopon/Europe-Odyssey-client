import { FaGlobeEurope } from "react-icons/fa";
import { FaCloudSunRain, FaEuroSign, FaLocationDot, FaUser } from "react-icons/fa6";
import { IoIosMan } from "react-icons/io";
import { MdAccessTimeFilled, MdEmail } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const SpotDetails = () => {
    const spot = useLoaderData();

    const { image, tourist_spot_name, short_description, country_name, location,
        travel_time, average_cost, total_visitors_per_year,
        seasonality, user_email, user_name } = spot;

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="lg:max-w-md max-w-full   rounded-lg shadow-2xl" />
                <div className="space-y-1">
                    <h1 className="text-5xl font-bold">{tourist_spot_name}</h1>
                    <p className="py-6">{short_description}</p>
                    <div className='flex justify-between border-y-2 py-3'>
                        <p className='flex gap-1 items-center text-xl'><FaGlobeEurope></FaGlobeEurope> {country_name}</p>
                        <p className='flex gap-1 items-center text-xl'><FaLocationDot /> {location}</p>
                    </div>
                    <div className='flex justify-between border-b-2 py-3'>
                        <p className='flex  items-center font-medium'><MdAccessTimeFilled /> Travel Time: {travel_time}</p>
                        <p className='flex  items-center font-medium'><FaEuroSign></FaEuroSign> Average Cost: {average_cost}</p>
                    </div>
                    <div className='flex justify-between border-b-2 py-3'>
                        <p className='flex gap-1 items-center font-medium'><IoIosMan /> Total Visitor Per Year: {total_visitors_per_year}</p>
                        <p className='flex gap-1 items-center font-medium'><FaCloudSunRain /> Seasonality: {seasonality}</p>
                    </div>
                    {
                        user_email ? <>
                            <p className='flex gap-1 items-center font-medium'><FaUser /> Uploader: {user_name}</p>
                            <p className='flex gap-1 items-center font-medium'><MdEmail /> Uploader Email: {user_email}</p>
                        </>
                            :
                            <></>
                    }
                </div>
            </div>
        </div>
    );
};

export default SpotDetails;