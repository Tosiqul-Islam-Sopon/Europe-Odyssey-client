import { useLoaderData } from "react-router-dom";
import DocumentTitle from "../../Title";
import Banner from "./Banner";
import TouristSpots from "./TouristSpots";
import Countries from "./Countries";

const Home = () => {
    DocumentTitle("EuropeOdyssey");
    const spots = useLoaderData();
    
      
    return (
        <div className="space-y-8">
            <Banner></Banner>
            <TouristSpots spots={spots}></TouristSpots>
            <Countries></Countries>
        </div>
    );
};

export default Home;