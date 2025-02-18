import styled from "styled-components";
import SearchContainer from "./SearchContainer";
import Weather from "./Weather";
import WeatherData from "./WeatherData";

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
const Date = styled.div`
  position: absolute;
  bottom: 23%;
  > p {
    font-size: 1.6rem;
    color: #484565;
  }
`;

function WeatherApp() {
  return (
    <Container>
      <StyledWeatherApp>
        <SearchContainer />
        <Weather />
        <Date>
          <p>Mon , 17 Feb</p>
        </Date>
        <WeatherData />
      </StyledWeatherApp>
    </Container>
  );
}

export default WeatherApp;
