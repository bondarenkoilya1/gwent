import {
  LearnButtonStyles,
  LearnDescriptionStyled,
  LearnImageStyled,
  LearnStyled,
  LearnTitleStyled
} from "./styled";

import youngManPhoto from "../../../assets/photos/sectionPrimary/young-man.png";
import { Button } from "../../ui";
import styled from "@emotion/styled";

const ButtonStyled = styled(Button)(LearnButtonStyles);

export const Learn = () => {
  return (
    <LearnStyled>
      <LearnTitleStyled>Обучись</LearnTitleStyled>
      <LearnDescriptionStyled>
        Узнай свой уровень, начав с легких ботов. Познай эту игру и составь конкуренцию старикам
      </LearnDescriptionStyled>
      <LearnImageStyled src={youngManPhoto} alt="Young Man with zero knowledge" />
      <ButtonStyled>Выбрать колоду</ButtonStyled>
    </LearnStyled>
  );
};
