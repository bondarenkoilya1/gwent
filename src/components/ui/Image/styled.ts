import styled from "@emotion/styled";

export const ImageStyled = styled.img`
  max-width: 100%;
  height: auto;
  // When image is selected there is no redundant spaces below
  vertical-align: middle;
  // When image is not loaded, alternate text doesn't highlight
  font-style: italic;
  // When image is loading it takes normal size and shape
  background-repeat: no-repeat;
  background-size: cover;
`;
