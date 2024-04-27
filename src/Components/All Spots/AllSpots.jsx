import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import SpotCard from "../Home/SpotCard";

const AllSpots = () => {
    const spots = useLoaderData();
    return (
        <div className="mt-10 space-y-8">
            <div className="mx-auto text-center w-2/3 space-y-3">
                <h1 className="text-4xl font-bold">
                    <Typewriter
                        words={['All Spots']}
                        typeSpeed={100}
                    />
                </h1>
                <p>Discover hidden gems recommended by fellow travelers on our User. Explore unique destinations and insider tips shared by our community for an authentic travel experience.</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
                {
                    spots.map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>)
                }
            </div>
        </div>
    );
};

export default AllSpots;