import PropTypes from 'prop-types';
import { FaGlobeEurope } from 'react-icons/fa';
import { FaEuroSign, FaLocationDot, } from 'react-icons/fa6';
import { MdAccessTimeFilled } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SpotCard = ({ spot }) => {
    const {image, tourist_spot_name, country_name, location, travel_time, average_cost} = spot;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="p-5 space-y-3">
                <h2 className="text-2xl font-bold">{tourist_spot_name}</h2>
                <div className='flex justify-between border-y-2 py-3'>
                    <p className='flex gap-1 items-center text-xl'><FaGlobeEurope></FaGlobeEurope> {country_name}</p>
                    <p className='flex gap-1 items-center text-xl'><FaLocationDot /> {location}</p>
                </div>
                <p className='flex gap-1 items-center font-medium'><MdAccessTimeFilled /> Travel Time: {travel_time}</p>
                <p className='flex gap-1 items-center font-medium border-b-2 pb-3'><FaEuroSign></FaEuroSign> Average Cost: {average_cost}</p>
                <div className="w-full">
                    <Link><button className="btn btn-primary w-full font-medium">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SpotCard;
SpotCard.propTypes = {
    spot: PropTypes.object
}