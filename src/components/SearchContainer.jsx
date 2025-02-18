import { CiLocationOn } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import styled from "styled-components";

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
  return (
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
  );
}

export default SearchContainer;
