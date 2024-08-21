import styled, { css } from "styled-components";

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
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr) );
    gap: 10px;
    width: 100%;
  }

`

export const HouseColor = styled.div`
  height: 12px;
  width: 12px;
  background: white;
  border-radius: 50%;

  ${({house}) => house === 'Grifinória' && css`
    background: red;
  `}

  ${({house}) => house === 'Corvinal' && css`
    background: blue;
  `}

  ${({house}) => house === 'Sonserina' && css`
    background: green;
  `}

  ${({house}) => house === 'Lufa-lufa' && css`
    background: yellow;
  `}
`

export const Character = styled.div`
    background: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 20px;
    border: 1px solid black;

    img {
      height: 350px;
      object-fit: contain;
    }

    p {
      margin-top: 10px;
      font-size: 1.8rem;
      text-align: center;
      font-weight: 600;
      font-size: 2rem;
    }

    span {
      display: flex;
      align-items: center;
      gap: 5px;
      color: #8c8c8c;
    }

    ${({house}) => house === 'Grifinória' && css`
      border-color: red;
    `}

    ${({house}) => house === 'Corvinal' && css`
      border-color: blue;
    `}

    ${({house}) => house === 'Sonserina' && css`
      border-color: green;
    `}

    ${({house}) => house === 'Lufa-lufa' && css`
      border-color: yellow;
    `}
`