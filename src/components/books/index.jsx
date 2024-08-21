import { useEffect, useState } from "react";
import { Container } from "./styles";
import axios from "axios";

export const Books = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const response = await axios.get(
      "https://potterapi-fedeperin.vercel.app/pt/books"
    );
    setBooks(response.data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <Container>
      <h2>✨Livros✨</h2>
      <section>
        {books.map((book) => {
          return (
            <div key={book.title}>
              <img src={book.cover} alt={book.title} />
              <p>{book.title}</p>
            </div>
          );
        })}
      </section>
    </Container>
  );
};
