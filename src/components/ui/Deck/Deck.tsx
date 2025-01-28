import { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import { DeckStyled, LoadingMessageStyled, TemporaryButtonStyled, TitleStyled } from "./styled";

import {
  CARD_TYPES,
  NORTHERN_REALMS_CARDS_ARRAY,
  NORTHERN_REALMS_CARDS_QUANTITY
} from "../../../constants";
import { useCardSetup } from "../../../hooks";
import { CardsOnBoardUpdater, CardType } from "../../../types";
import { Card } from "../Card";
import { CardRow } from "../CardRow";
import { Error } from "../Error";

export const Deck: FC<CardsOnBoardUpdater> = ({ setCardsOnBoard }) => {
  const { cardsInDeck, loading, error } = useCardSetup(
    NORTHERN_REALMS_CARDS_ARRAY,
    NORTHERN_REALMS_CARDS_QUANTITY
  );

  if (loading) return <LoadingMessageStyled>Loading...</LoadingMessageStyled>;

  const addCardToBoard = (selectedRowType: CardType) =>
    setCardsOnBoard((prevState) =>
      prevState.map((row) =>
        row.type === selectedRowType
          ? {
              ...row,
              cards: [
                ...row.cards,
                {
                  name: `${Math.floor(Math.random() * 100)}`,
                  description: "card!",
                  type: selectedRowType,
                  points: Math.floor(Math.random() * 10) + 1
                }
              ]
            }
          : row
      )
    );

  return (
    <DeckStyled>
      {CARD_TYPES.map((type) => (
        <TemporaryButtonStyled key={uuidv4()} onClick={() => addCardToBoard(type)}>
          Add {type} fight card to the board
        </TemporaryButtonStyled>
      ))}

      {/*TODO: Firstly i create branch for creating an error component; Then branch for publishing changes about card transferring*/}
      {error && <Error unspecifiedErrorMessage={error} />}
      <TitleStyled>Your Deck</TitleStyled>
      <CardRow type="deck">
        {cardsInDeck.map(({ name, description, type, points }) => (
          // TODO: OnClick should transfer card to the board and remove from the deck
          <Card name={name} description={description} type={type} points={points} key={uuidv4()} />
        ))}
      </CardRow>
    </DeckStyled>
  );
};
