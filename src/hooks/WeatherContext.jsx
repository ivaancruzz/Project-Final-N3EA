import React, { createContext, useState, useEffect } from 'react';

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState(null);
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchWeather = async (lat, lon) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=c739b37edac93e5b65459fa362b12a26`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchWeatherByCity = async (cityName) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=c739b37edac93e5b65459fa362b12a26`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchCityName = async (lat, lon) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c739b37edac93e5b65459fa362b12a26`);
            const data = await response.json();
            setCity(data.name);
        } catch (error) {
            console.error('Error fetching city name:', error);
        }
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error('Error getting location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    useEffect(() => {
        getLocation(); 
    }, []); 

    useEffect(() => {
        if (location) { 
            fetchWeather(location.lat, location.lon);
            fetchCityName(location.lat, location.lon);
        }
    }, [location]); 

    return (
        <WeatherContext.Provider
            value={{
                weatherData,
                city,
                getLocation,
                setLocation,
                fetchWeatherByCity, // Agregamos fetchWeatherByCity al contexto
                loading,
                error,
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

export { WeatherProvider, WeatherContext };
