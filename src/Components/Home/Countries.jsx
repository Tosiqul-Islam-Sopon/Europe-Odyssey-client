import { Typewriter } from 'react-simple-typewriter';
import CountryCard from './CountryCard';
import { useEffect, useState } from 'react';

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
            <div className="mx-auto text-center w-2/3 space-y-4">
                <h1 className="text-4xl font-bold">
                    <Typewriter
                        words={['Countries']}
                        typeSpeed={100}
                    />
                </h1>
                <p>Explore our curated collection of destinations from around the world in our &quot;Countries&quot; section. Discover fascinating information, stunning images, and brief descriptions of six iconic countries, each offering a unique travel experience.</p>
            </div>
            <div className='grid grid-cols-3 gap-2'>
                {
                    countries.map(country => <CountryCard key={country._id} country={country}></CountryCard>)
                }
            </div>
        </div>
    );
};

export default Countries;
