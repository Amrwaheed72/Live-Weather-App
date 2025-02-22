import { ImDroplet } from "react-icons/im";
import { TbBrandTailwind } from "react-icons/tb";
import styled from "styled-components";
import Spinner from "../ui/Spinner";
import { useWeatherApp } from "../context/weatherAppContext";
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

const DropLetIcon = styled(ImDroplet)`
  font-size: 3rem;
`;
const Windicon = styled(TbBrandTailwind)`
  font-size: 3rem;
`;

function WeatherData() {
  const { weatherinfo, isPending } = useWeatherApp();

  if (isPending) return <Spinner />;
  if (!weatherinfo) return <p>no Weather Data</p>;

  const {
    main: { humidity },
    wind: { speed },
  } = weatherinfo;
  return (
    <StyledWeatherData>
      <HumidtyContainer>
        <div className="name">Humidity</div>
        <DropLetIcon className="icon" />
        <HumidtyData>{humidity}%</HumidtyData>
      </HumidtyContainer>
      <WindContainer>
        <div className="name">Wind Speed</div>
        <Windicon className="icon" />
        <WindData>{speed}KM/H</WindData>
      </WindContainer>
    </StyledWeatherData>
  );
}

export default WeatherData;
