import { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import { CardRowStyles, PlayerBoardStyled } from "./styled";
import styled from "@emotion/styled";

import { CARD_TYPES } from "../../../constants";
import { CardsOnBoardArray, CardType } from "../../../types";
import { Card } from "../Card";
import { CardRow } from "../CardRow";

const CardRowStyled = styled(CardRow)(CardRowStyles);

export const PlayerBoard: FC<CardsOnBoardArray> = ({ cardsOnBoard }) => {
  const renderRowsByCardTypes = () =>
    CARD_TYPES.map((type: CardType, index) => (
      <CardRowStyled type={type} key={uuidv4()}>
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
      </CardRowStyled>
    ));

  return <PlayerBoardStyled>{renderRowsByCardTypes()}</PlayerBoardStyled>;
};
