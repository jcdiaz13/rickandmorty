import { useEffect, useState } from "react";
import { getCharacters } from "../../app/services/services";
import {
  CardsContainer,
  Card,
  Container,
  Header,
  Footer,
  StyledLink,
} from "./Home.styles";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((res) => {
      setCharacters(res);
      console.log(res);
    });
  }, []);

  return (
    <Container>
      <Header>
        <NavLink to={"/"}>Home</NavLink>
        <h1>RICK & MORTY</h1>
      </Header>
      <CardsContainer>
        {characters.map((character) => {
          return (
            <Card key={character.id}>
              <StyledLink to={`/profile/${character.id}`}>
                <img src={character.image} />
                <h2>{character.name}</h2>
              </StyledLink>
            </Card>
          );
        })}
      </CardsContainer>
      <Footer>
        <h1>FOOTER</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quam,
          deleniti nostrum quas ex aut vitae magnam nihil non suscipit nesciunt.
          Quam, sunt. Ratione esse iste quibusdam deleniti. Ducimus, possimus?
        </p>
      </Footer>
    </Container>
  );
};

export default Home;
