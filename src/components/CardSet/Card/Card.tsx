import {
  CardPointsStyled,
  CardPropertiesStyled,
  CardStyled,
  CardTitleStyled,
  CardTypeStyled
} from "./styled";

export const Card = ({ card }: { card: any }) => {
  const { name, type, points } = card;

  return (
    <CardStyled>
      <CardPropertiesStyled>
        <CardTitleStyled>{name}</CardTitleStyled>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <CardPointsStyled>
            <span>{points}</span> points
          </CardPointsStyled>
          <CardTypeStyled>
            <span>{type}</span> unit
          </CardTypeStyled>
        </div>
      </CardPropertiesStyled>
    </CardStyled>
  );
};
