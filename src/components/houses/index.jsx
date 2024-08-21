import { useEffect, useState } from "react";
import { Container } from "./styles";
import axios from "axios";

export const Houses = () => {
  const [houses, setHouses] = useState([]);

  const getHouses = async () => {
    const response = await axios.get(
      "https://potterapi-fedeperin.vercel.app/pt/houses"
    );
    setHouses(response.data);
  };

  useEffect(() => {
    getHouses();
  }, []);

  return (
    <Container>
      <h2>✨Casas✨</h2>
      <section>
        {houses.map((house) => {
          return (
            <div className="house" key={house.house}>
              <img src={`/${house.house}.jpg`} alt={house.house} />
              <p>{house.house}</p>
              <span>Animal: {house.emoji}</span>
              <span>Criador: {house.founder}</span>
            </div>
          );
        })}
      </section>
    </Container>
  );
};
