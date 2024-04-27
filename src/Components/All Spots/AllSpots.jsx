import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import SpotCard from "../Home/SpotCard";
import { useState } from "react";
import DocumentTitle from "../../Title";

const AllSpots = () => {
    DocumentTitle("All Spots");
    const loadedData = useLoaderData();
    const [spots, setSpots] = useState(loadedData);

    const handleSort = (e) => {
        const formData = e.target.value;
        console.log(formData);
        if (formData == "Average Cost") {
            const sortedSpots = [...spots].sort((a, b) => {
                return a.average_cost.localeCompare(b.average_cost);
            });
            setSpots(sortedSpots);
        }
    }
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
                <form onChange={handleSort}>
                    <label className="form-control w-full max-w-xs mx-auto">
                        <div className="label mx-auto">
                            <span className="label-text text-xl font-bold">Sort by</span>
                        </div>
                        <select name="sortBy" className="select select-bordered font-medium">
                            <option disabled selected>Pick one</option>
                            <option >Average Cost</option>
                        </select>
                    </label>
                </form>
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