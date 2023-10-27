import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
z-index: 1;
display: flex;
justify-content: space-between;
position: fixed;
padding: 1em; /* Use padding instead of margin */
align-items: center;
width: calc(100% - 2em); /* Adjust width to account for padding */
  box-sizing: border-box; /* Include padding in the width calculation */
`;
const NavText = styled.div`
font-family: "Lilita One", sans-serif;
font-size: 1.5rem;
color: white;
`
const NavTitle = styled.div`
font-family: "Lilita One", sans-serif;
  font-size: 2rem;
  color: #50c878;
`
const NavLink = styled(Link)`
all: unset;
cursor: pointer;
`
const NavBar = () => {
  return (
    <Container>
      <NavText><NavLink to="/events">Events</NavLink></NavText>
      <NavText><NavLink to="/about">About</NavLink></NavText>
      <NavTitle><NavLink to="/">La POUbeLLE MaGNiFiQUE</NavLink></NavTitle>
      <NavText><NavLink to="/blog">Blog</NavLink></NavText>
      <NavText>Products</NavText>
      
    </Container>
  );
};

export default NavBar;
