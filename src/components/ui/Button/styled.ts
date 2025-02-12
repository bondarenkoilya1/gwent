import styled from "@emotion/styled";

export const ButtonStyled = styled.button<{ variant: "primary" | "secondary" | "tertiary" }>`
  outline: 1px solid transparent;
  border: 2px solid #000;
  background-color: #fff;
  color: #000;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 18px;

  &:hover {
    cursor: pointer;
  }
`;
