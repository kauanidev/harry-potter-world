import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 80px 0 20px 0;
    font-size: 3rem;
  } 

  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr) );
    gap: 20px;
    width: 100%;
  }

  @media(max-width: 600px) {
    section {
    grid-template-columns: 1fr;
    }
  }

  img {
    max-width: 520px;
    width: 100%;
  }

  p {
    margin-top: 20px;
    font-size: 2.4rem;
    font-weight: 600;
  }

  span {
    color: #8c8c8c;
  }

  div{
    background: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 20px;
  }

`