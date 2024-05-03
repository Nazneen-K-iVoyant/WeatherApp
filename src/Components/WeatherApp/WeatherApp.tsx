// import React from 'react';
// import './WeatherApp.css'
// import searchIcon from '../../assets/searchIcon.png'
// import sunny from '../../assets/sunAndCloud.png'
// import humidity from '../../assets/humidity.png'
// import wind from '../../assets/wind.png'

// const WeatherApp = () => {

//     const apiKey = "db35b86054733cd931943a53ba3d1d88";
//     const search= async()=>{
//         const element=document.getElementsByClassName("cityInput")
//         if(element[0].value==="")
//             {
//                 return 0
//             }
//             let url=`
//             https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`

//             let response= await fetch(url)
//             let data= response.json()
//             const humidity=document.getElementsByClassName('humidity-percentage')
//             const wind=document.getElementsByClassName('wind-rate')
//             const temperature=document.getElementsByClassName('weather-temp')
//             const location=document.getElementsByClassName('weather-location')

//             humidity[0].innerHTML=data.main.humidity;
//             wind[0].innerHTML=data.wind.speed;
//             temperature[0].innerHTML=data.main.temp;
//             location[0].innerHTML=data.name

//     }


//     return (
//         <>
//             <div className="container">
//                 <div className="top-bar">

//                     <input type="text" className='cityInput' placeholder='Enter city name to search..' />

//                     <div className="search-icon" onClick={()=>{search()}} >
//                         <img src={searchIcon} alt="" className='searchIcon' />
//                     </div>

//                 </div>

//                 <div className="weather-image">
//                     <img src={sunny} alt="" />
//                 </div>

//                 <div className="weather-temp">
//                     24 C
//                 </div>
//                 <div className="weather-location">Delhi</div>

//                 <div className="data-container">
//                     <div className="element">
//                         <img src={humidity} className='icon' alt="" />
//                         <div className="data">
//                             <div className="humidity-percentage">64%</div>
//                             <div className="text">Humidity</div>
//                         </div>
//                     </div>

//                     <div className="element">
//                         <img src={wind} className='icon' alt="" />
//                         <div className="data">
//                             <div className="wind-rate">18 km/ph</div>
//                             <div className="text">Wind Speed</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default WeatherApp





// import React, { useState } from 'react';
// import './WeatherApp.css';
// import searchIcon from '../../assets/searchIcon.png';
// import sunny from '../../assets/sunAndCloud.png';
// import humidity from '../../assets/humidity.png';
// import wind from '../../assets/wind.png';
// import clear from '../../assets/clear.png'
// import cloud from '../../assets/cloud.png'
// import lightning from '../../assets/lightning.png'
// import drizzel from '../../assets/drizzel.png'

// const WeatherApp = () => {
//     const [weatherData, setWeatherData] = useState({
//         temperature: null,
//         humidity: null,
//         windSpeed: null,
//         location: null
//     });

//     const apiKey = "db35b86054733cd931943a53ba3d1d88";
//     const [wicon,setWicon]=useState(cloud)

//     const search = async () => {
//         const element = document.getElementsByClassName("cityInput")[0];
//         const cityName = element.value.trim();
//         if (!cityName) {
//             alert("Please enter a city name.");
//             return;
//         }

//         try {
//             const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error(`Failed to fetch weather data for ${cityName}`);
//             }
//             const data = await response.json();

//             setWeatherData({
//                 temperature: Math.round(data.main.temp),
//                 humidity: data.main.humidity,
//                 windSpeed: data.wind.speed,
//                 location: data.name
//             });
//         } catch (error) {
//             console.error(error.message);
//             alert("Failed to fetch weather data. Please try again.");
//         }

//         if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
//             setWicon(clear)
//         } else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
//             setWicon(lightning)
//         } else if 
//         {
//             (data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
//                 setWicon(drizzel)
//         }
//     }

//     return (
//         <div className="container">
//             <div className="top-bar">
//                 <input type="text" className='cityInput' placeholder='Enter city name to search..' />
//                 <div className="search-icon" onClick={search}>
//                     <img src={searchIcon} alt="" className='searchIcon' />
//                 </div>
//             </div>

//             <div className="weather-image">
//                 <img src={sunny} alt="" />
//             </div>

//             <div className="weather-temp">{weatherData.temperature ? `${weatherData.temperature}°C` : ''}</div>
//             <div className="weather-location">{weatherData.location}</div>

//             <div className="data-container">
//                 <div className="element">
//                     <img src={humidity} className='icon' alt="" />
//                     <div className="data">
//                         <div className="humidity-percentage">{weatherData.humidity ? `${weatherData.humidity}%` : ''}</div>
//                         <div className="text">Humidity</div>
//                     </div>
//                 </div>

//                 <div className="element">
//                     <img src={wind} className='icon' alt="" />
//                     <div className="data">
//                         <div className="wind-rate">{weatherData.windSpeed ? `${weatherData.windSpeed} km/ph` : ''}</div>
//                         <div className="text">Wind Speed</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default WeatherApp;



import React, { useState } from 'react';
import './WeatherApp.css';
import searchIcon from '../../assets/searchIcon.png';
// import sunny from '../../assets/sunAndCloud.png';
import humidity from '../../assets/humidity.png';
import wind from '../../assets/wind.png';
import clear from '../../assets/clear.png';
import cloud from '../../assets/cloud.png';
import lightning from '../../assets/lightning.png';
import drizzel from '../../assets/drizzel.png'


const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState({
        temperature: null,
        humidity: null,
        windSpeed: null,
        location: null
    });

    const [wicon, setWicon] = useState(cloud);

    const apiKey = "db35b86054733cd931943a53ba3d1d88";

    const search = async () => {
        const element = document.getElementsByClassName("cityInput")[0];
        const cityName = element.value.trim();
        if (!cityName) {
            alert("Please enter a city name.");
            return;
        }

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch weather data for ${cityName}`);
            }
            const data = await response.json();

            setWeatherData({
                temperature: Math.round(data.main.temp),
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                location: data.name
            });

            // Set weather icon based on weather condition
            const weatherIcon = data.weather[0].icon;
            if (weatherIcon === "01d" || weatherIcon === "01n") {
                setWicon(clear);
            } else if (weatherIcon === "02d" || weatherIcon === "02n") {
                setWicon(lightning);
            } else if (weatherIcon === "03d" || weatherIcon === "03n") {
                setWicon(drizzel);
            } else {
                setWicon(cloud); // Default icon
            }
        } catch (error) {
            console.error(error.message);
            alert("Failed to fetch weather data. Please try again.");
        }
    };

    return (
        <div className="container">
            <div className="top-bar">
                <input type="text" className='cityInput' placeholder='Enter city name to search..' />
                <div className="search-icon" onClick={search}>
                    <img src={searchIcon} alt="" className='searchIcon' />
                </div>
            </div>

            <div className="weather-image">
                <img src={wicon} alt="Weather Icon" />
            </div>

            <div className="weather-temp">{weatherData.temperature ? `${weatherData.temperature}°C` : ''}</div>
            <div className="weather-location">{weatherData.location}</div>

            <div className="data-container">
                <div className="element">
                    <img src={humidity} className='icon' alt="" />
                    <div className="data">
                        <div className="humidity-percentage">{weatherData.humidity ? `${weatherData.humidity}%` : ''}</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>

                <div className="element">
                    <img src={wind} className='icon' alt="" />
                    <div className="data">
                        <div className="wind-rate">{weatherData.windSpeed ? `${weatherData.windSpeed} km/ph` : ''}</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherApp;
