import React from 'react';
import { GeoLoc } from './GeoLoc';

function WeatherCard({ weatherData, toggleModal }) {
    // Verificar si weatherData está definido y no es nulo
    if (!weatherData) {
        return <div>Loading...</div>;
    }

    // Verificar si weatherData.list está definido y no es nulo
    if (!weatherData.list || weatherData.list.length === 0) {
        return <div>No weather data available</div>;
    }

    // Obtener el primer elemento de weatherData.list
    const currentWeather = weatherData.list[0];

    // Verificar si currentWeather.main y currentWeather.weather están definidos
    if (!currentWeather.main || !currentWeather.weather || currentWeather.weather.length === 0) {
        return <div>No weather data available</div>;
    }

    // Obtener la temperatura actual y la descripción del clima
    const temperature = currentWeather.main.temp;
    const weatherDescription = currentWeather.weather[0].description;

    return (
        <div className="absolute top-0 left-0 h-full w-full max-w-[375px] mx-auto bg-[#1E213A] p-6 transition-transform duration-300 ease-in-out transform translate-x-0">
            {/* Search Button */}
            <div className="flex justify-between items-center mb-10">
                <button 
                    className="py-2 px-4 bg-[#6E707A] text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    onClick={toggleModal}
                >
                    Search for places
                </button>
               <GeoLoc/>


            </div> 

            <div className="w-full h-2/6 relative">
                <figure className="w-full h-full opacity-20">
                    <img src="/public/Cloud-background.png" alt="Cloud Background" className="w-full h-full object-cover" />
                    </figure>
                    <figure className="w-28 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-50">
                        <img src={`/public/${currentWeather.weather[0].icon}.png`} alt="" />
                    </figure>
            
            </div> 

            <div className="text-center mb-12">
                <div className="text-[144px] font-light leading-none">
                    {temperature.toFixed(2)}<span className="text-5xl font-normal text-[#A09FB1] align-top ml-2">°C</span>
                </div>
                <div className="text-[#A09FB1] text-4xl mt-6">{weatherDescription}</div>
            </div> 

            <div className="text-[#88869D] text-center">
                <div className="mb-4">Today • Mon, 3 Jun</div>
                <div className="flex items-center justify-center">
                    <span className="material-icons mr-2">location_on</span>
                    {weatherData.city.name || 'Select a location'}
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;