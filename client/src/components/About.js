import { styled } from "styled-components";
import Background from "../imgs/planet.jpg";
import Poster from "../imgs/poster.jpg"

const Container = styled.div`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentHolder = styled.div`
display: flex;
align-items: center;
vertical-align: middle;
margin: 2em;
`
const Image = styled.img`
height: 50vh;
`
const Text = styled.div`
font-family: "Lilita One", sans-serif;
  font-size: 2rem;
  color: #50c878;
  margin-left: 2em;
  width: 40vw;
`;
const About = () => {
  return (
    <Container>
        <ContentHolder>
<Image src={Poster}/>
      <Text>
        La Poubelle Magnifique is a cosmic dustbin, an inter-dimensional
        watering hole and a rest stop for the lost and profound. It is a place
        for the existentially absurd to catch its breath and mingle with the
        here and now, a place for lost notes and forgotten plots to gather and
        become the dreamers dream.
      </Text>
      </ContentHolder>
    </Container>
  );
};

export default About;
