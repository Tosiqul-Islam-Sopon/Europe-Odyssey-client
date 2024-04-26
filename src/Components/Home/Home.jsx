import DocumentTitle from "../../Title";
import Banner from "./Banner";

const Home = () => {
    DocumentTitle("EuropeOdyssey");
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;