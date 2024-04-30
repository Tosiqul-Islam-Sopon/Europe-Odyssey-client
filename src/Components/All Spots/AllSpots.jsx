import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import SpotCard from "../Home/SpotCard";
import { useState } from "react";
import DocumentTitle from "../../Title";
import { Bounce, Fade } from "react-awesome-reveal";

const AllSpots = () => {
    DocumentTitle("All Spots");
    const loadedData = useLoaderData();
    const [spots, setSpots] = useState(loadedData);

    const handleSort = (e) => {
        const formData = e.target.value;
        console.log(formData);
        if (formData === "Ascending Order") {
            const sortedSpots = [...spots].sort((a, b) => {
                return parseInt(a.average_cost) - parseInt(b.average_cost);
            });
            setSpots(sortedSpots);
        }
        else if (formData === "Decending Order") {
            const sortedSpots = [...spots].sort((a, b) => {
                return parseInt(b.average_cost) - parseInt(a.average_cost);
            });
            setSpots(sortedSpots);
        }
    }
    return (
        <div className="mt-10 space-y-8">
            <Fade>
                <div className="mx-auto text-center lg:w-2/3 p-2 space-y-3">
                    <Bounce>
                        <h1 className="text-4xl font-bold">
                            <Typewriter
                                words={['All Spots']}
                                typeSpeed={100}
                            />
                        </h1>
                    </Bounce>
                    <p>Discover hidden gems recommended by fellow travelers on our User. Explore unique destinations and insider tips shared by our community for an authentic travel experience.</p>
                    <form onChange={handleSort}>
                        <label className="form-control w-full max-w-xs mx-auto">
                            <div className="label mx-auto">
                                <span className="label-text text-xl font-bold">Sort by Average Cost</span>
                            </div>
                            <select name="sortBy" className="select select-bordered font-medium">
                                <option disabled selected>Pick one</option>
                                <option >Ascending Order</option>
                                <option >Decending Order</option>
                            </select>
                        </label>
                    </form>
                </div>
            </Fade>
            <Fade>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
                    {
                        spots.map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>)
                    }
                </div>
            </Fade>
        </div>
    );
};

export default AllSpots;