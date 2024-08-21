import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  

  h2 {
      margin: 20px 0;
      font-size: 3rem;
  }

  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr) );
    gap: 10px;
    width: 100%;
  }

  div {
    background: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 20px;


    img {
      height: 350px;
      object-fit: contain;
    }

    p {
      margin-top: 10px;
      font-size: 1.8rem;
      text-align: center;
    }
  }
`