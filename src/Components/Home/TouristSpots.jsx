import PropTypes from 'prop-types';
import SpotCard from './SpotCard';
import { Typewriter } from 'react-simple-typewriter';
import { Bounce, Fade } from 'react-awesome-reveal';

const TouristSpots = ({ spots }) => {

    return (
        <div className="space-y-8">
            <Fade>
                <div className="mx-auto text-center lg:w-2/3 p-2 space-y-4">
                    <Bounce>
                        <h1 className="text-3xl lg:text-4xl font-bold">
                            <Typewriter
                                words={['Our Tourist Spots']}
                                typeSpeed={100}
                            />
                        </h1>
                    </Bounce>
                    <p>Explore our curated selection of breathtaking tourist spots from around the world. From iconic landmarks to hidden gems, discover unforgettable destinations for your next adventure.</p>
                </div>
            </Fade>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2'>
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