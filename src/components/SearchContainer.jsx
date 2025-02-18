import { CiLocationOn } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import styled from "styled-components";
import Spinner from "../ui/Spinner";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import { useWeatherApp } from "../context/weatherAppContext";

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

function SearchContainer() {
  const { onSearch, inputValue, setInputValue, weatherinfo, isPending } =
    useWeatherApp();
  if (isPending) return <Spinner />;
  if (!weatherinfo) return <p>no Weather Data</p>;
  const {
    name,
    sys: { country },
  } = weatherinfo;

  countries.registerLocale(enLocale);
  const countryCode = country;
  const countryName = countries.getName(countryCode, "en"); //to get the name of the country

  function handleSearch(e) {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onSearch(inputValue.trim());
    setInputValue("");
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      if (!inputValue.trim()) return;
      onSearch(inputValue.trim());
      setInputValue("");
    }
  }

  return (
    <StyledSearchContainer>
      <StyledSearchTop>
        <LocationIcon />
        <StyledLocation>{name} || </StyledLocation>
        <StyledLocation>{countryName}</StyledLocation>
      </StyledSearchTop>
      <StyledSearchBar>
        <StyledInput
          autoFocus
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your location..."
          onKeyDown={handleKeyDown}
        />
        <SearchIcon onClick={handleSearch} />
      </StyledSearchBar>
    </StyledSearchContainer>
  );
}
export default SearchContainer;
