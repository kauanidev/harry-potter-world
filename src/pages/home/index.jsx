import { Books } from "../../components/books";
import { Characters } from "../../components/characters";
import { Houses } from "../../components/houses";
import { Spells } from "../../components/spells";
import { Container } from "./styles";

export const Home = () => {
  return (
    <Container>
      <Books />
      <Characters />
      <Houses />
      <Spells />
    </Container>
  );
};
