import React, { useState, useEffect } from "react";
import "./WeatherData.css";
import partlyCloudy from "../images/cloudy.png";
import mist from "../images/mist.png";
import sunny from "../images/sunny.png";
import rainy from "../images/rainy.png";
import snowy from "../images/snowy.png";
import notFoundImage from "../images/404.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind, faWater } from "@fortawesome/free-solid-svg-icons";

function WeatherData({ weatherData }) {
  const [weatherImage, setWeatherImage] = useState(null);
  useEffect(() => {
    if (weatherData.error === undefined) {
      const text = weatherData.current?.condition.text.toLowerCase();

      if (text.includes("partly cloudy") || text.includes("overcast")) {
        setWeatherImage(partlyCloudy);
      } else if (
        text.includes("mist") ||
        text.includes("cloudy") ||
        text.includes("fog")
      ) {
        setWeatherImage(mist);
      } else if (text.includes("sunny") || text.includes("clear")) {
        setWeatherImage(sunny);
      } else if (text.includes("rain") || text.includes("thunder")) {
        setWeatherImage(rainy);
      } else if (
        text.includes("snow") ||
        text.includes("sleet") ||
        text.includes("freez") ||
        text.includes("blizzard")
      ) {
        setWeatherImage(snowy);
      } else {
        setWeatherImage(notFoundImage);
      }
    }
  }, [weatherData]);

  if (weatherData?.error) {
    return <div className="text-danger">{weatherData.error}</div>;
  }

  return (
    <div className="weather-data d-flex flex-column align-items-center justify-content-center gap-2">
      <img
        src={weatherImage}
        alt="weatherImage"
        className="img-fluid weather-image"
      />
      <span className="temprature">
        {" "}
        {weatherData && weatherData?.current?.temp_c}
      </span>
      <span>{weatherData && weatherData?.current.condition.text}</span>
      <div className="d-flex justify-content-between gap-5">
        <div className="d-flex align-items-center gap-2">
          <FontAwesomeIcon icon={faWater} className="faWater fs-2" />
          <div className="humidity-and-temprature">
            <span className="d-block">
              {weatherData && weatherData?.current.humidity}%
            </span>
            <span>Humidity</span>
          </div>
        </div>
        <div className="d-flex align-items-center  gap-2">
          <FontAwesomeIcon icon={faWind} className="faWind\ fs-2" />
          <div className="humidity-and-temprature">
            <span className="d-block">
              {weatherData && weatherData?.current.wind_kph} Km/h
            </span>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherData;
