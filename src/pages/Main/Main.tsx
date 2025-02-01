import { Link } from "react-router-dom";

import { ContainerStyled } from "../../styled";

export const Main = () => {
  return (
    <ContainerStyled>
      <h1 style={{ fontSize: "36px" }}>Main page</h1>
      <Link to="/game">Play</Link>
    </ContainerStyled>
  );
};
