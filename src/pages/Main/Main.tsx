import { useState } from "react";

import { ContainerStyled } from "../../styled";
import { ContainerStyles, HandStyles } from "./styled";

import { Hand, PlayerBoard } from "../../components";
import { RowProps } from "../../types";

export const Main = () => {
  const [cardsOnBoard, setCardsOnBoard] = useState<RowProps[]>([
    { type: "close", cards: [] },
    { type: "range", cards: [] },
    { type: "siege", cards: [] }
  ]);
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <ContainerStyled style={ContainerStyles}>
      <PlayerBoard cardsOnBoard={cardsOnBoard} setCurrentScore={setCurrentScore} />
      <Hand
        outsideStyles={HandStyles}
        setCardsOnBoard={setCardsOnBoard}
        currentScore={currentScore}
      />
    </ContainerStyled>
  );
};
