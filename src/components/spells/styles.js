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
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr) );
    gap: 20px;
    text-align: center;
    width: 100%;
  }

  img {
    width: 520px;
  }

  p {
    font-size: 2.2rem;
    font-weight: 600;
  }

  div{
    background: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 20px;
    border: 1px solid #f5d03b;
 
    > span {
      color: #8c8c8c;
      margin-top: 10px;
    }
  }

`