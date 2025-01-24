import styled from "@emotion/styled";

export const CardStyled = styled.li`
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 12px;
  padding: 10px;
  width: 200px;
  height: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;
`;

export const CardNameStyled = styled.h3`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 28px;
`;

export const CardDescriptionStyled = styled.p`
  color: darkred;
`;

export const CardTypeStyled = styled.p`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const CardPointsStyled = styled.p`
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

export const CardTextHighlighted = styled.span`
  font-weight: 600;
  color: darkred;
`;
