import { BsFillLightningChargeFill as LightningIcon } from "react-icons/bs";
import { Link } from "react-router-dom";

import { LearnButtonStyles, LearnDescriptionStyled, LearnStyled, LearnTitleStyled } from "./styled";
import styled from "@emotion/styled";

import { Button } from "../../ui";

const ButtonStyled = styled(Button)(LearnButtonStyles);

export const Learn = () => {
  return (
    <LearnStyled>
      <LearnTitleStyled>Обучись</LearnTitleStyled>
      <LearnDescriptionStyled>
        Узнай свой уровень, начав с легких ботов. <br /> Познай эту игру и составь конкуренцию
        старикам
      </LearnDescriptionStyled>
      <Link to="/game">
        <ButtonStyled hasIcon="onLeft" icon={LightningIcon}>
          Выбрать колоду
        </ButtonStyled>
      </Link>
    </LearnStyled>
  );
};
