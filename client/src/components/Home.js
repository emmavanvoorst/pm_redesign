import { styled } from "styled-components";
import background from "../imgs/bkg.jpg";
import QR from "../imgs/qr.jpg";

const Container = styled.div`
  position: relative;
  background-image: url(${background});
  filter: brightness(70%); 
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;
const BottomText = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  align-items: center;

  width: 100vw;
  height: 30vh;
  background-color: rgba(0, 0, 0, 0.6);
`;
const Image = styled.img`
  height: 15vh;
  margin-left: 2em;
  border-radius: 20%;
`;
const TextFlex = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1em;
`;
const Title = styled.p`
  font-family: "Lilita One", sans-serif;
  font-size: 5rem;
  color: #50c878;
`;
const Welcome = styled.p`
  font-family: "Lilita One", sans-serif;
  font-size: 3rem;
  color: #b93be2;
`;
const Home = () => {
  return (
    <Container>
      <BottomText>
        <Image src={QR} />
        <TextFlex>
          <Welcome>Welcome to</Welcome>
          <Title>La POUbeLLE MaGNiFiQUE</Title>
        </TextFlex>
      </BottomText>
    </Container>
  );
};

export default Home;
