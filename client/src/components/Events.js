import { styled } from "styled-components";
import YardSale from "../imgs/yard sale.PNG"
const Container = styled.div`
  background-color: #4E91A6;
  height: 100vw;
  display: flex;
  justify-content: center;
  padding-top: 10em;
  `
const Image = styled.img`
height: 70vh;
`
const Events = () => {
    return(
        <Container>
            <Image src={YardSale}/>
        </Container>
    )
}

export default Events;