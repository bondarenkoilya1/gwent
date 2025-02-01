import { FC, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { CardRowStyles, PlayerBoardStyled } from "./styled.ts";

import { CARD_TYPES } from "../../constants";
import { CardProps, CardsOnBoardArray, CardType } from "../../types";
import { Card, CardRow } from "../ui";

export const PlayerBoard: FC<CardsOnBoardArray> = ({ cardsOnBoard, setCurrentScore }) => {
  const getCardPoints = (card: CardProps) => Number(card.points) || 0;

  useEffect(() => {
    const allCards: CardProps[] = cardsOnBoard.flatMap((row) => row.cards);
    const currentScore = allCards.reduce((total, card) => total + getCardPoints(card), 0);

    setCurrentScore((prevScore) => (prevScore !== currentScore ? currentScore : prevScore));
  }, [cardsOnBoard, setCurrentScore]);

  const renderRowsByCardTypes = () =>
    CARD_TYPES.map((type: CardType, index) => (
      <CardRow outsideStyles={CardRowStyles} type={type} key={uuidv4()}>
        {cardsOnBoard[index].cards.map(({ id, name, description, type, points }) => (
          <Card
            key={id}
            id={id}
            name={name}
            description={description}
            type={type}
            points={points}
          />
        ))}
      </CardRow>
    ));

  return <PlayerBoardStyled>{renderRowsByCardTypes()}</PlayerBoardStyled>;
};
