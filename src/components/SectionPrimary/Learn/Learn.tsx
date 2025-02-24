import { LearnButtonStyles, LearnDescriptionStyled, LearnStyled, LearnTitleStyled } from "./styled";
import styled from "@emotion/styled";

import { Button } from "../../ui";

const ButtonStyled = styled(Button)(LearnButtonStyles);

export const Learn = () => {
  return (
    <LearnStyled>
      <LearnTitleStyled>Обучись</LearnTitleStyled>
      <LearnDescriptionStyled>
        Узнай свой уровень, начав с легких ботов. Познай эту игру и составь конкуренцию старикам
      </LearnDescriptionStyled>
      <ButtonStyled>Выбрать колоду</ButtonStyled>
    </LearnStyled>
  );
};
