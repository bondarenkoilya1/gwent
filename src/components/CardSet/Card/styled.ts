import styled from "@emotion/styled";

export const CardStyled = styled.li`
  margin-bottom: 10px;
  max-width: 300px;
  border-radius: 6px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
  padding: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CardPropertiesStyled = styled.ul``;

export const CardTitleStyled = styled.h3`
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
`;

export const CardPointsStyled = styled.li`
  & > span {
    font-weight: 700;
  }
`;

export const CardTypeStyled = styled.li`
  & > span {
    text-transform: capitalize;
    font-weight: 700;
  }
`;
