import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
    const { image, country_name, short_description } = country;
    console.log(country);
    return (
        <Link to={`/countrySpots/${country_name}`}>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={image} alt="Country Image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{country_name}</h2>
                    <p>{short_description}</p>
                    
                </div>
            </div>
        </Link>
    );
};

export default CountryCard;

CountryCard.propTypes = {
    country: PropTypes.object
}