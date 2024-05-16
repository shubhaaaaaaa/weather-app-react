import React, { useState } from "react"
import './weatherapp.css'

//importing all assets in one object
const images = {
    'clear-icon': require('../assets/icons/clear.png'),
    'cloud-icon': require('../assets/icons/cloud.png'),
    'drizzle-icon': require('../assets/icons/drizzle.png'),
    'humidity-icon': require('../assets/icons/humidity.png'),
    'rain-icon': require('../assets/icons/rain.png'),
    'search-icon': require('../assets/icons/search.png'),
    'snow-icon': require('../assets/icons/snow.png'),
    'wind-icon': require('../assets/icons/wind.png'),
    'logo-icon': require('../assets/icons/logo.png'),
    'github-icon': require('../assets/icons/github.png'),
    'instagram-icon': require('../assets/icons/instagram.png'),
    'linkedin-icon': require('../assets/icons/linkedin.png'),
};



const MyComponent = () => {

    let api_key = 'cc668e7f950fe69afc87a107fb545289';
    const [wicon, setWicon] = useState(images['clear-icon']);

    const search = async () => {
        const element = document.getElementsByClassName('cityInput');
        
        if (element[0].value === '') {
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();

        const humidity = document.getElementsByClassName('humidity');
        const wind = document.getElementsByClassName('wind');
        const highlow = document.getElementsByClassName('highlow');
        const location = document.getElementsByClassName('location');
        const temperature = document.getElementsByClassName('temperature');
        const description = document.getElementsByClassName('description');

        wind[0].innerHTML = Math.floor(data.wind.speed) + ' km/h';
        humidity[0].innerHTML = Math.floor(data.main.humidity) + '%';
        highlow[0].innerHTML = Math.floor(data.main.temp_max) + '/' + Math.floor(data.main.temp_min) + '&deg;C';
        location[0].innerHTML = data.name;
        temperature[0].innerHTML = Math.floor(data.main.temp) + ' &deg;C';
        description[0].innerHTML = (data.weather[0].description).charAt(0).toUpperCase() + (data.weather[0].description).slice(1);

        if(data.weather[0].icon === '01d' || data.weather[0].icon === '01n'){
            setWicon(images['clear-icon']);
        }

        else if (data.weather[0].icon === '02d' || data.weather[0].icon === '02n') {
            setWicon(images['cloud-icon']);
        }

        else if (data.weather[0].icon === '03d' || data.weather[0].icon === '03n') {
            setWicon(images['drizzle-icon']);
        }

        else if (data.weather[0].icon === '04d' || data.weather[0].icon === '04n') {
            setWicon(images['drizzle-icon']);
        }

        else if (data.weather[0].icon === '09d' || data.weather[0].icon === '09d') {
            setWicon(images['rain-icon']);
        }

        else if (data.weather[0].icon === '10d' || data.weather[0].icon === '10d') {
            setWicon(images['rain-icon']);
        }

        else if (data.weather[0].icon === '13d' || data.weather[0].icon === '13d') {
            setWicon(images['snow-icon']);
        }

        else  {
            setWicon(images['clear-icon']);
        }

    }

    return (
        <div className="container relative w-36">

            <div className="header-portion pl-3">
                <div className="logoImage">
                    <img src={images['logo-icon']} alt="Logo" />
                </div>

                <div className="searchbar flex ">
                    <input type="text" className="cityInput pl-5  text-black caret-black" placeholder="Enter name of city" />
                    <img src={images["search-icon"]} alt="searchIcon" onClick={() => { search() }} className="opacity-70 relative right-12 h-6 mt-3" />
                </div>
            </div>

            <div className="location-portion text-white mt-8">
                <div className="location font-bold text-lg">Kathmandu, Nepal</div>
                <div className="day-date text-sm ">Saturday, 13 April 2024</div>
            </div>

            <div className="main-portion py-10 pe-10">
                <div className="weather-image">
                    <img src={wicon} className="h-40" alt="" />
                </div>
                <div className="weather-detail text-center">
                    <p className="p font-bold text-6xl temperature">27&deg;C</p>
                    <p className="text-center description">Sunny Morning</p>
                </div>
            </div>

            <div className="elements-portion flex justify-evenly py-2 text-white bg-white bg-opacity-20 mx-9 rounded-lg">
                <div className=" border-r pr-8">
                    <div className="font-bold text-lg wind">18 km/h</div>
                    <span className="text-sm opacity-80">Wind</span>
                </div>
                <div className="border-r pr-8">
                    <div className="font-bold text-lg highlow">17/27&deg;C</div>
                    <span className="text-sm opacity-80">High/Low</span>
                </div>
                <div className="">
                    <div className="font-bold text-lg humidity">64%</div>
                    <span className="text-sm opacity-80">Humidity</span>
                </div>
            </div>

            <div className="footer-portion absolute bottom-5 left-28 text-white">
                <div className="socials  flex justify-center gap-x-3">
                    <a href="https://github.com/shubhaaaaaaa" rel="noopener noreferrer" target="_blank">
                        <img src={images['github-icon']} className="h-5" alt="GitHub" />
                    </a>
                    <a href="https://www.instagram.com/strokes_byshubha/" rel="noopener noreferrer" target="_blank">
                        <img src={images['instagram-icon']} className="h-5" alt="Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/shubhakhadgi/" rel="noopener noreferrer" target="_blank">
                        <img src={images['linkedin-icon']} className="h-5" alt="LinkedIn" />
                    </a>
                </div>
                <div className="copyright text-sm pt-4 pb-4">
                    <p>
                        &#169;2024 <a className="hover:underline" href="https://shubhakhadgi.com.np/" rel="noopener noreferrer" target="_blank">Shubha Khadgi</a> | All rights reserved
                    </p>
                </div>

            </div>
        </div>
    )
}



export default MyComponent;