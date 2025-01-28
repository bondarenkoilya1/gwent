import styled from "@emotion/styled";

export const LoadingMessageStyled = styled.p`
  font-size: 24px;
  color: #fff;
`;

export const DeckStyled = styled.div`
  width: 100%;
`;

export const TemporaryButtonStyled = styled.button`
  margin-top: 20px;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  background-color: #fff;
  border: none;
  transition: background-color 0.3s ease-in-out;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover {
    background-color: #d8c4b6;
    transition: background-color 0.3s ease-in-out;
  }

  &:active {
    background-color: #a38875;
    transition: background-color 0.3s ease-in-out;
  }
`;

export const TitleStyled = styled.h2`
  font-size: 26px;
  color: #fff;
  margin: 30px 0 10px 0;
`;
