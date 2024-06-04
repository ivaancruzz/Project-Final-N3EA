import React, { useContext } from 'react';
import WeatherCard from './WeatherCard';
import { WeatherContext } from '../hooks/WeatherContext'; // Asegúrate de usar { WeatherContext }

export const Temperature = () => {
    const { weatherData, city, getLocation, kelvinToCelsius, kelvinToFahrenheit, searchLocation } = useContext(WeatherContext);
    if (!weatherData) {
        return <div>Loading...</div>;
      }
    
      return (
        <div className="p-8">
          <div className="flex justify-between w-full mb-4">
            <button className="text-white" onClick={() => searchLocation('')}>
              Search for places
            </button>
            <button onClick={getLocation}>Get Location</button> {/* Asegúrate de llamar la función correctamente */}
          </div>
          {city && <h2 className="text-2xl mt-4 text-white">Weather in {city}</h2>}
          <div className="grid grid-cols-1 gap-4 mt-4">
            {weatherData.list.map((item) => (
              <WeatherCard
                key={item.dt}
                weatherData={item} // Pasar weatherData en lugar de clima
              />
            ))}
          </div>
        </div>
      );
    };