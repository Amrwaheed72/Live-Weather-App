
import styled from "styled-components";
import Spinner from "../ui/Spinner";
import { useWeatherApp } from "../context/weatherAppContext";
import sunny from "/sunny.png";
import cloudy from "/cloudy.png";
import rainy from "/rainy.png";
import snowy from "/snowy.png";

const StyledWeather = styled.div``;
const WeatherType = styled.div`
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  color: #484565;
`;
const Temp = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 9rem;
  background-image: linear-gradient(to right, #2f2e57, #605e80);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Lilita One", sans-serif;
  text-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.2);
`;
const Img = styled.img`
  margin-top: -9rem;
  /* display: none; */
`;

function Weather() {
  const { weatherinfo, isPending } = useWeatherApp();
  if (isPending) return <Spinner />;
  if (!weatherinfo) return <p>no Weather Data</p>;

  const {
    main: { temp },
    weather,
  } = weatherinfo;
  const weatherStatus = weather[0].main;

  const exactTemp = Math.ceil(temp);

  const weatherImages = {
    Clear: sunny,
    Clouds: cloudy,
    Rain: rainy,
    Snow: snowy,
    Haze: cloudy,
    Mist: cloudy,
  };
  const weatherImage = weatherinfo.weather
    ? weatherImages[weatherinfo.weather[0].main]
    : null;

  return (
    <StyledWeather>
      <Img src={weatherImage} alt="sunny"></Img>
      <WeatherType>{weatherStatus}</WeatherType>
      <Temp>{exactTemp}°C</Temp>
    </StyledWeather>
  );
}

export default Weather;
