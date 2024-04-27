import PropTypes from 'prop-types';
import SpotCard from './SpotCard';
import { Typewriter } from 'react-simple-typewriter';

const TouristSpots = ({ spots }) => {

    return (
        <div className="space-y-8">
            <div className="mx-auto text-center w-2/3 space-y-4">
                <h1 className="text-4xl font-bold">
                    <Typewriter
                        words={['Our Tourist Spots']}
                        typeSpeed={100}
                    />
                </h1>
                <p>Explore our curated selection of breathtaking tourist spots from around the world. From iconic landmarks to hidden gems, discover unforgettable destinations for your next adventure.</p>
            </div>
            <div className='grid grid-cols-3 gap-2'>
                {
                    spots.map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>)
                }
            </div>
        </div>
    );
};

export default TouristSpots;

TouristSpots.propTypes = {
    spots: PropTypes.array
}