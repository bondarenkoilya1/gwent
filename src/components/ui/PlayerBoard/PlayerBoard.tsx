import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { CARD_TYPES } from "../../../constants";
import { CardType, RowProps } from "../../../types";
import { Card } from "../Card";
import { CardRow } from "../CardRow";

export const PlayerBoard = () => {
  const [cardsOnBoard, setCardsOnBoard] = useState<RowProps[]>([
    { type: "close", cards: [] },
    { type: "range", cards: [] },
    { type: "siege", cards: [] }
  ]);

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
      {CARD_TYPES.map((type, index) => (
        <CardRow type={type}>
          {cardsOnBoard[index].cards.map(({ name, description, type, points }) => (
            <Card
              key={uuidv4()}
              name={name}
              description={description}
              type={type}
              points={points}
            />
          ))}
        </CardRow>
      ))}
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
    </div>
  );
};
