import { useState } from "react";

import { ContainerStyled } from "../../styled";

import { Deck, PlayerBoard } from "../../components";
import { RowProps } from "../../types";

export const Main = () => {
  const [cardsOnBoard, setCardsOnBoard] = useState<RowProps[]>([
    { type: "close", cards: [] },
    { type: "range", cards: [] },
    { type: "siege", cards: [] }
  ]);

  return (
    <ContainerStyled style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <PlayerBoard cardsOnBoard={cardsOnBoard} />
      <div style={{ marginTop: "auto", marginBottom: "5%" }}>
        <Deck setCardsOnBoard={setCardsOnBoard} />
      </div>
    </ContainerStyled>
  );
};
