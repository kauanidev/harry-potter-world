import { useEffect, useState } from "react";
import { Container } from "./styles";
import axios from "axios";

export const Spells = () => {
  const [spells, setSpells] = useState([]);

  const getSpells = async () => {
    const response = await axios.get(
      "https://potterapi-fedeperin.vercel.app/pt/spells"
    );
    setSpells(response.data);
  };

  useEffect(() => {
    getSpells();
  }, []);

  return (
    <Container>
      <h2>✨Feitiços✨</h2>
      <section>
        {spells.map((spell) => {
          return (
            <div className="spell" key={spell.spell}>
              <p>{spell.spell}</p>
              <span>{spell.use}</span>
            </div>
          );
        })}
      </section>
    </Container>
  );
};
