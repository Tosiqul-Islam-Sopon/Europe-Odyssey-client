import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
    const { image, country_name, short_description } = country;
    console.log(country);
    return (
        <Link to={`/countrySpots/${country_name}`}>
            <Fade>
                <div className="card card-compact h-[400px] bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Country Image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">{country_name}</h2>
                        <p>{short_description}</p>
                    </div>
                </div>
            </Fade>
        </Link>
    );
};

export default CountryCard;

CountryCard.propTypes = {
    country: PropTypes.object
}