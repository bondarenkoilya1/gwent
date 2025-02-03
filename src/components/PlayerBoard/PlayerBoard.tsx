import { FC, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { CardRowStyles, PlayerBoardStyled } from "./styled";

import { CARD_TYPES } from "../../constants";
import { CardProps, CardsOnBoardArray, CardType } from "../../types";
import { saveCurrentScore } from "../../utils";
import { Card, CardRow } from "../ui";

export const PlayerBoard: FC<CardsOnBoardArray> = ({
  cardsOnBoard,
  currentScore,
  setCurrentScore
}) => {
  useEffect(() => {
    const allCards: CardProps[] = cardsOnBoard.flatMap((row) => row.cards);

    //
    const multiplierCard = allCards.find((card: CardProps) => card.speciality === "multiplier");
    const hasMultiplierCard = allCards.some((card: CardProps) => card.speciality === "multiplier");

    if (hasMultiplierCard) {
      const cardsInRowWithMultiplierCard = allCards.filter(
        (item) => item.type === multiplierCard.type
      );

      cardsInRowWithMultiplierCard.forEach((card) => {
        if (!card.multiplied) {
          if (card.points) card.points *= 2;
          card.multiplied = true;
        }
      });
    }
    //

    const getCardPoints = (card: CardProps) => Number(card.points) || 0;
    const currentScore = allCards.reduce((total, card) => total + getCardPoints(card), 0);
    setCurrentScore((prevScore) => (prevScore !== currentScore ? currentScore : prevScore));
  }, [cardsOnBoard, setCurrentScore]);

  saveCurrentScore(currentScore);

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
