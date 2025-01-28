import { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import { DeckStyled, LoadingMessageStyled, TitleStyled } from "./styled";

import { NORTHERN_REALMS_CARDS_ARRAY, NORTHERN_REALMS_CARDS_QUANTITY } from "../../../constants";
import { useCardSetup } from "../../../hooks";
import { CardProps, CardsOnBoardUpdater } from "../../../types";
import { Card } from "../Card";
import { CardRow } from "../CardRow";
import { Error } from "../Error";

export const Deck: FC<CardsOnBoardUpdater> = ({ setCardsOnBoard }) => {
  const { cardsInDeck, setCardsInDeck, loading, error } = useCardSetup(
    NORTHERN_REALMS_CARDS_ARRAY,
    NORTHERN_REALMS_CARDS_QUANTITY
  );

  if (loading) return <LoadingMessageStyled>Loading...</LoadingMessageStyled>;

  const removeCardFromDeck = (cardId: string) => {
    setCardsInDeck((prevDeck: CardProps[]) =>
      prevDeck.filter((deckCard) => deckCard.id !== cardId)
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

    removeCardFromDeck(card.id);
  };

  return (
    <DeckStyled>
      {/*TODO: Firstly i create branch for creating an error component; Then branch for publishing changes about card transferring*/}
      {error && <Error unspecifiedErrorMessage={error} />}

      <TitleStyled>Your Deck</TitleStyled>
      <CardRow type="deck">
        {cardsInDeck.map((card: CardProps) => {
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
    </DeckStyled>
  );
};
