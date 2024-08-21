import axios from "axios";
import { useEffect, useState } from "react";
import { Character, Container, HouseColor } from "./styles";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const response = await axios.get(
      "https://potterapi-fedeperin.vercel.app/pt/characters"
    );
    setCharacters(response.data);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <Container>
      <h2>✨Personagens✨</h2>
      <section>
        {characters.map((character) => {
          return (
            <Character house={character.hogwartsHouse} key={character.nickname}>
              <img src={character.image} alt={character.nickname} />
              <p>{character.nickname}</p>
              <span>
                <HouseColor house={character.hogwartsHouse} />
                {character.hogwartsHouse}
              </span>
            </Character>
          );
        })}
      </section>
    </Container>
  );
};
