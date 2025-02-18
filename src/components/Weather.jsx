import sunny from "/sunny.png";
import cloudy from "/cloudy.png";
import rainy from "/rainy.png";
import snowy from "/snowy.png";
import styled from "styled-components";

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
  position: absolute;
  /* display: none; */
`;

function Weather() {
  return (
    <StyledWeather>
      <Img src={sunny} alt="sunny"></Img>
      <WeatherType>Clear</WeatherType>
      <Temp>20°</Temp>
    </StyledWeather>
  );
}

export default Weather;
