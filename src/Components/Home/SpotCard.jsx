import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import { FaCloudSunRain, FaEuroSign, } from 'react-icons/fa6';
import { IoIosMan } from 'react-icons/io';
import { MdAccessTimeFilled } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SpotCard = ({ spot }) => {
    const { _id, image, tourist_spot_name, travel_time, average_cost, total_visitors_per_year, seasonality } = spot;
    return (
        <Fade>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={image} alt="Sopt Image" /></figure>
                <div className="p-5 flex flex-col justify-between h-full">
                    <div className='space-y-4'>
                        <h2 className="text-2xl font-bold">{tourist_spot_name}</h2>

                        <div className='flex justify-between border-y-2 py-3'>
                            <p className='flex  items-center font-medium'><MdAccessTimeFilled /> Travel Time: {travel_time}</p>
                            <p className='flex  items-center font-medium'><FaEuroSign></FaEuroSign> Average Cost: {average_cost}</p>
                        </div>

                        <p className='flex gap-1 items-center font-medium'><IoIosMan /> Total Visitor Per Year: {total_visitors_per_year}</p>
                        <p className='flex gap-1 items-center font-medium pb-3 border-b-2'><FaCloudSunRain /> Seasonality: {seasonality}</p>
                    </div>

                    <div className="w-full">
                        <Link to={`/spotDetails/${_id}`}><button className="btn btn-primary w-full font-medium">View Details</button></Link>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default SpotCard;
SpotCard.propTypes = {
    spot: PropTypes.object
}