import { CiLocationOn } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import styled from "styled-components";
import sunny from "../../public/sunny.png";
import cloudy from "../../public/cloudy.png";
import rainy from "../../public/rainy.png";
import snowy from "../../public/snowy.png";
import { ImDroplet } from "react-icons/im";
import { TbBrandTailwind } from "react-icons/tb";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to right, #f3b07c, #fcb2a3);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  /* display: none; */
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
const StyledSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;
const StyledSearchTop = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;
const StyledLocation = styled.div`
  font-size: 1.6rem;
  color: #484569;
  letter-spacing: 0.1rem;
`;
const StyledSearchBar = styled.div`
  position: relative;
`;
const StyledInput = styled.input`
  width: 30rem;
  height: 3.5rem;
  background-color: transparent;
  border: 0.2rem solid #676394;
  border-radius: 3rem;
  padding: 1rem 3rem 1rem 1rem;
  font-size: 1.6rem;
  color: #484569;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 1.4rem;
    color: #676394;
    letter-spacing: 0.1rem;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;
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
const Date = styled.div`
  position: absolute;
  bottom: 22%;
  > p {
    font-size: 1.6rem;
    color: #484565;
  }
`;

const StyledWeatherData = styled.div`
  width: 100%;
  position: absolute;
  bottom: 2rem;
  display: flex;
  column-gap: 2rem;
  padding: 0 2rem;
`;
const HumidtyContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  row-gap: 1.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 1rem;
  border-radius: 1rem;
  .name {
    font-size: 1.6rem;
    color: #605d80;
  }
  .icon {
    fill: #fff;
    stroke: #fff;
  }
  div:nth-child(3) {
    font-size: 2rem;
    color: #2f2e57;
  }
`;
const HumidtyData = styled.div``;
const WindContainer = styled(HumidtyContainer)``;
const WindData = styled.div``;

const SearchIcon = styled(IoSearchOutline)`
  position: absolute;
  top: 50%;
  transform: translateX(-150%) translateY(-50%);
  font-size: 2rem;
  stroke: #56518e;
  cursor: pointer;
`;
const LocationIcon = styled(CiLocationOn)`
  font-size: 3rem;
`;
const DropLetIcon = styled(ImDroplet)`
  font-size: 3rem;
`;
const Windicon = styled(TbBrandTailwind)`
  font-size: 3rem;
`;
function WeatherApp() {
  return (
    <Container>
      <StyledWeatherApp>
        <StyledSearchContainer>
          <StyledSearchTop>
            <LocationIcon />
            {/* <IoLocationSharp /> */}
            <StyledLocation>Abu Hammad</StyledLocation>
          </StyledSearchTop>
          <StyledSearchBar>
            <StyledInput
              type="text"
              placeholder="Enter your location...."
            ></StyledInput>
            <SearchIcon />
          </StyledSearchBar>
        </StyledSearchContainer>
        <StyledWeather>
          <Img src={sunny} alt="sunny"></Img>
          <WeatherType>Clear</WeatherType>
          <Temp>20°</Temp>
        </StyledWeather>
        <Date>
          <p>Mon , 17 Feb</p>
        </Date>
        <StyledWeatherData>
          <HumidtyContainer>
            <div className="name">Humdity</div>
            <DropLetIcon className="icon" />
            <HumidtyData>33%</HumidtyData>
          </HumidtyContainer>
          <WindContainer>
            <div className="name">Wind Speed</div>
            <Windicon className="icon" />
            <WindData>3KM/H</WindData>
          </WindContainer>
        </StyledWeatherData>
      </StyledWeatherApp>
    </Container>
  );
}

export default WeatherApp;
