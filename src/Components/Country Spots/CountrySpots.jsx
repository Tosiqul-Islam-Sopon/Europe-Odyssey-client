import { useLoaderData, useParams } from "react-router-dom";
import SpotCard from "../Home/SpotCard";
import { Bounce, Fade } from "react-awesome-reveal";

const CountrySpots = () => {
    const country = useParams();
    const spots = useLoaderData();
    return (
        <div className="space-y-10">
            <Bounce>
                <h1 className="text-4xl font-bold text-center">{country.country} Spots</h1>
            </Bounce>
            <Fade>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2'>
                    {
                        spots.map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>)
                    }
                </div>
            </Fade>
        </div>
    );
};

export default CountrySpots;