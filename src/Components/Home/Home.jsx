import { useLoaderData } from "react-router-dom";
import DocumentTitle from "../../Title";
import Banner from "./Banner";
import TouristSpots from "./TouristSpots";
import Countries from "./Countries";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import WeatherWidget from "../Weather Widget/WeatherWidget";
import TravelTips from "../Travel Tips/TravelTips";

const Home = () => {
    DocumentTitle("EuropeOdyssey");
    const spots = useLoaderData();
    const {loading} = useContext(AuthContext);

    if (loading) {
        return (
            <div className="flex justify-center items-center mt-10">
                <div>
                    <span className="loading loading-ring loading-xs"></span>
                    <span className="loading loading-ring loading-sm"></span>
                    <span className="loading loading-ring loading-md"></span>
                    <span className="loading loading-ring loading-lg"></span>
                </div>
            </div>
        )
    }
      
    return (
        <div className="space-y-8">
            <Banner></Banner>
            <TouristSpots spots={spots}></TouristSpots>
            <Countries></Countries>
            <WeatherWidget></WeatherWidget>
            <TravelTips></TravelTips>
        </div>
    );
};

export default Home;