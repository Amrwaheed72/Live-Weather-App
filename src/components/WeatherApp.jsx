import styled from "styled-components";
import SearchContainer from "./SearchContainer";
import Weather from "./Weather";
import WeatherData from "./WeatherData";
import { useWeatherApp } from "../context/weatherAppContext";
import Spinner from "../ui/Spinner";
import Logo from "../Logo";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to right, #f3b07c, #fcb2a3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWeatherApp = styled.div`
  width: 40rem;
  height: 70rem;
  background-image: linear-gradient(to top, #f3b07c, #fcb2a3);
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  box-shadow: -3rem 1rem 6rem rgba(0, 0, 0, 0.1);
  position: relative;
`;
const StyledDate = styled.div`
  position: absolute;
  bottom: 23%;
  > p {
    font-size: 1.6rem;
    color: #484565;
  }
`;

function WeatherApp() {
  const { weatherinfo, isPending } = useWeatherApp();
  if (isPending) return <Spinner />;
  if (!weatherinfo) return <p>no Weather data</p>;
  function getFormattedDate() {
    const date = new Date();
    const options = { weekday: "short", day: "2-digit", month: "short" };
    return date.toLocaleDateString("en-US", options);
  }

  const logoImages = {
    Clear: "/public/amrorange.jpg",
    Clouds: "/public/amrblue.jpg",
    Rain:  "/public/amrblue.jpg",
    Snow:  "/public/amrblue.jpg",
    Haze:  "/public/amrblue.jpg",
    Mist:  "/public/amrblue.jpg",
  };
  const logoImage = weatherinfo.weather
    ? logoImages[weatherinfo?.weather[0]?.main]
    : "/public/amrorange.jpg";


  const backgroundImages = {
    Clear: "linear-gradient(to right, #f3b07c, #fcb2a3)",
    Clouds: "linear-gradient(to right, #57d6d4, #71eeec)",
    Rain: "linear-gradient(to right, #5bc8fb, #80eaff)",
    Snow: "linear-gradient(to right, #aff2ff, #fff)",
    Haze: "linear-gradient(to right, #57d6d4, #71eeec)",
    Mist: "linear-gradient(to right, #57d6d4, #71eeec)",
  };
  const backgroundImage = weatherinfo.weather
    ? backgroundImages[weatherinfo?.weather[0]?.main]
    : "linear-gradient(to right, #f3b07c, #fcb2a3)";
  return (
    <Container style={{ backgroundImage }}>
      <Logo logoImage={logoImage} />
      <StyledWeatherApp style={{ backgroundImage }}>
        <SearchContainer />
        <Weather />
        <StyledDate>
          <p>{getFormattedDate()}</p>
        </StyledDate>
        <WeatherData />
      </StyledWeatherApp>
    </Container>
  );
}

export default WeatherApp;
