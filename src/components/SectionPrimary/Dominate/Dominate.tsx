import {
  DominateContainerStyled,
  DominateDescriptionStyled,
  DominateStyled,
  DominateTitleStyled
} from "./styled";

export const Dominate = () => {
  return (
    <DominateStyled>
      <DominateContainerStyled>
        <DominateTitleStyled>Доминируй</DominateTitleStyled>
        <DominateDescriptionStyled>
          Сразись с сильнейшими. <br /> Попробуй продержаться в топ-10 хотябы два дня
        </DominateDescriptionStyled>
      </DominateContainerStyled>
    </DominateStyled>
  );
};
