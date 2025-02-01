import { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import { HandStyled, LoadingMessageStyled, TitleStyled } from "./styled.ts";

import { NORTHERN_REALMS_CARDS_ARRAY, NORTHERN_REALMS_CARDS_QUANTITY } from "../../constants";
import { useCardSetup } from "../../hooks";
import { CardProps, CardsOnBoardUpdater } from "../../types";
import { Card, CardRow, Error } from "../ui";

export const Hand: FC<CardsOnBoardUpdater> = ({ outsideStyles, setCardsOnBoard, currentScore }) => {
  const { cardsInHand, setCardsInHand, loading, error } = useCardSetup(
    NORTHERN_REALMS_CARDS_ARRAY,
    NORTHERN_REALMS_CARDS_QUANTITY
  );

  if (loading) return <LoadingMessageStyled>Loading...</LoadingMessageStyled>;

  const removeCardFromHand = (cardId: string) => {
    setCardsInHand((prevHand: CardProps[]) =>
      prevHand.filter((handCard) => handCard.id !== cardId)
    );
  };

  const addCardToBoard = (card: CardProps) => {
    const selectedRowType = card.type;

    setCardsOnBoard((prevState) =>
      prevState.map((row) =>
        row.type === selectedRowType
          ? {
              ...row,
              cards: [...row.cards, card]
            }
          : row
      )
    );

    removeCardFromHand(card.id);
  };

  return (
    <HandStyled css={outsideStyles}>
      {error && <Error unspecifiedErrorMessage={error} />}
      <div>Score: {currentScore}</div>

      <TitleStyled>Your Hand</TitleStyled>
      <CardRow type="hand">
        {cardsInHand.map((card: CardProps) => {
          const { id, name, description, type, points } = card;

          return (
            <Card
              id={id}
              name={name}
              description={description}
              type={type}
              points={points}
              key={uuidv4()}
              onClick={() => addCardToBoard(card)}
            />
          );
        })}
      </CardRow>
    </HandStyled>
  );
};
