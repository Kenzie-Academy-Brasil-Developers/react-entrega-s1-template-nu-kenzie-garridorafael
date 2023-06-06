import logo from "../../assets/Nu-Kenzie.png"
import { NavBar } from "./styledHeader"
import { StyledContainer } from "../../styles/globalStyle"

export function Header() {
  return (
    <NavBar>
      <StyledContainer>
        <img src={logo} alt="logo da nu kenzie" />
      </StyledContainer>
    </NavBar>
  )
}
