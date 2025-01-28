import { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import { PlayerBoardStyled } from "./styled";

import { CARD_TYPES } from "../../../constants";
import { CardsOnBoardArray, CardType } from "../../../types";
import { Card } from "../Card";
import { CardRow } from "../CardRow";

export const PlayerBoard: FC<CardsOnBoardArray> = ({ cardsOnBoard }) => {
  const renderRowsByCardTypes = () =>
    CARD_TYPES.map((type: CardType, index) => (
      <CardRow type={type} key={uuidv4()}>
        {cardsOnBoard[index].cards.map(({ name, description, type, points }) => (
          <Card key={uuidv4()} name={name} description={description} type={type} points={points} />
        ))}
      </CardRow>
    ));

  return <PlayerBoardStyled>{renderRowsByCardTypes()}</PlayerBoardStyled>;
};
