import { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import { NORTHERN_REALMS_CARDS_ARRAY, NORTHERN_REALMS_CARDS_QUANTITY } from "../../../constants";
import { useCardSetup } from "../../../hooks";
import { CardsOnBoardUpdater, CardType } from "../../../types";
import { Card } from "../Card";
import { CardRow } from "../CardRow";

export const Deck: FC<CardsOnBoardUpdater> = ({ setCardsOnBoard }) => {
  const { cardsInDeck, loading, error } = useCardSetup(
    NORTHERN_REALMS_CARDS_ARRAY,
    NORTHERN_REALMS_CARDS_QUANTITY
  );

  if (loading) return <p>Loading...</p>;

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
                  type: "close",
                  points: Math.floor(Math.random() * 10)
                }
              ]
            }
          : row
      )
    );

  return (
    <div style={{ width: "100%" }}>
      <button
        style={{ marginTop: "20px", marginRight: "20px", padding: "10px" }}
        onClick={() => addCardToBoard("close")}>
        Add close fight card to the board
      </button>
      <button
        style={{ marginTop: "20px", marginRight: "20px", padding: "10px" }}
        onClick={() => addCardToBoard("range")}>
        Add range card to the board
      </button>
      <button
        style={{ marginTop: "20px", padding: "10px" }}
        onClick={() => addCardToBoard("siege")}>
        Add siege card to the board
      </button>

      <h3>{error}</h3>
      <h2>Deck</h2>
      <CardRow type="deck">
        {cardsInDeck.map(({ name, description, type, points }) => (
          <Card name={name} description={description} type={type} points={points} key={uuidv4()} />
        ))}
      </CardRow>
    </div>
  );
};
