import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
  }
  th {
    color: blue
  }
  h1 {
    border: solid 5px red
  }
  td {
    font-style: italic;
  }
`;

export const AddBookDiv = styled.div`
  background: ${(props) => props.theme.mainColor};
  border-radius: 15px;
  padding: 30px;
  margin: auto;
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
  align-items: center;

  input {
    height: 40px;
    width: 300px;
    border-radius: 4px;
    border: 2px solid white;
  }
`;

export const Button = styled.button`
  height: 40px;
  width: 150px;
  border-radius: 4px;
  border: none;
  color: white;
  background: ${(props) => props.theme.darkGreen};
`;

export const Rectangle = styled.div`
  position: relative;
  width: 370px;
  height: 700px;
  border: 2px solid;
  text-align: center;
  color: ${(props) => props.theme.backgroundColor};
`;

export const RowStyled = styled.tr`
  height: 40px;
  align-items: center;

  td {
    font-family: "Courier New", Courier, monospace;

    &.low {
      color: green;
    }

    &.middle {
      color: orange;
    }

    &.high {
      color: red;
    }
  }
`;

export const theme = {
  backgroundColor: "#242424",
  mainColor: "pink",
  kashkhaBlue: "#1050ef",
};

export const Title = styled.h1`
  color: ${(props) => props.color};
  font-family: menlo;
  background-color: ${(props) => props.theme.backgroundColor};
  height: 80px;
  width: 370px;
  margin: 0px;
  padding-top: 40px;
  font-size: 40px;
  margin-bottom: 10px;
  font-weight: ${(props) => props.fontWeight};
`;

// export { Rectangle, Title };
