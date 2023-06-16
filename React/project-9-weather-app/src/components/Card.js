import "./Card.css";
import Search from "./Search";
import WeatherData from "./WeatherData";
import { useState } from "react";
import axios from "axios";

export default function Card() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (query) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=no`;

    try {
      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
      setWeatherData({ error: "City not found" });
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <div className="card d-flex align-items-center justify-content-center flex-column">
        <Search handleSearch={handleSearch} />
        {weatherData && <WeatherData weatherData={weatherData} />}
      </div>
    </div>
  );
}
