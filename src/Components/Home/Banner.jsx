import Netherlands from "../../assets/Images/Netherlands.jpg"
import England from "../../assets/Images/England.jpg"
import Spain from "../../assets/Images/Spain.jpg"
import Italy from "../../assets/Images/Italy.jpg"
import Switzerland from "../../assets/Images/Switzerland.jpg"
import France from "../../assets/Images/France.jpg"
import { Typewriter } from "react-simple-typewriter"
import { Bounce, Fade } from "react-awesome-reveal"


const Banner = () => {
    return (
        <Fade>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={France} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <Bounce>
                            <h1 className="text-6xl font-bold text-white">
                                <Typewriter
                                    words={['FRANCE']}
                                    typeSpeed={100}
                                />
                            </h1>
                        </Bounce>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={Spain} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <h1 className="text-6xl font-bold text-white">
                            <Typewriter
                                words={['SPAIN']}
                                typeSpeed={100}
                            />
                        </h1>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={Netherlands} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <h1 className="text-6xl font-bold text-white">
                            <Typewriter
                                words={['NETHERLANDS']}
                                typeSpeed={100}
                            />
                        </h1>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={England} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <h1 className="text-6xl font-bold text-white">
                            <Typewriter
                                words={['ENGLAND']}
                                typeSpeed={100}
                            />
                        </h1>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={Switzerland} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <h1 className="text-6xl font-bold text-white">
                            <Typewriter
                                words={['SWITZERLAND']}
                                typeSpeed={100}
                            />
                        </h1>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={Italy} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <h1 className="text-6xl font-bold text-white">
                            <Typewriter
                                words={['ITALY']}
                                typeSpeed={100}
                            />
                        </h1>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Banner;