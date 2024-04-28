import { Typewriter } from 'react-simple-typewriter';
import CountryCard from './CountryCard';
import { useEffect, useState } from 'react';
import { Bounce, Fade } from 'react-awesome-reveal';

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/countries')
            .then(res => res.json())
            .then(data => {
                setCountries(data);
            })
    }, []);

    console.log(countries);

    return (
        <div className='space-y-5'>
            <Fade>
                <div className="mx-auto text-center lg:w-2/3 p-2 space-y-4">
                    <Bounce>
                        <h1 className="lg:text-4xl text-3xl font-bold">
                            <Typewriter
                                words={['Countries']}
                                typeSpeed={100}
                            />
                        </h1>
                    </Bounce>
                    <p>Explore our curated collection of destinations from around the world in our &quot;Countries&quot; section. Discover fascinating information, stunning images, and brief descriptions of six iconic countries, each offering a unique travel experience.</p>
                </div>
            </Fade>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2'>
                {
                    countries.map(country => <CountryCard key={country._id} country={country}></CountryCard>)
                }
            </div>
        </div>
    );
};

export default Countries;
