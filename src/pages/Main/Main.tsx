import { ContainerStyled } from "../../styled";

import { Deck, PlayerBoard } from "../../components/ui";

export const Main = () => {
  return (
    <ContainerStyled style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <PlayerBoard />
      <div style={{ marginTop: "auto", marginBottom: "5%" }}>
        <Deck />
      </div>
    </ContainerStyled>
  );
};
