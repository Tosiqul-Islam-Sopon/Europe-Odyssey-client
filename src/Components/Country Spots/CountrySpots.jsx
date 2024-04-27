import { useLoaderData, useParams } from "react-router-dom";
import SpotCard from "../Home/SpotCard";

const CountrySpots = () => {
    const country = useParams();
    const spots = useLoaderData();
    return (
        <div className="space-y-10">
            <h1 className="text-4xl font-bold text-center">{country.country} Spots</h1>
            <div className='grid grid-cols-3 gap-2'>
                {
                    spots.map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>)
                }
            </div>
        </div>
    );
};

export default CountrySpots;