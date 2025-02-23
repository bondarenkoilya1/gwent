import { css } from "@emotion/react";

import styled from "@emotion/styled";

// todo: bring color to the global color group: #146EE4, #f21e1e

export const LearnStyled = styled.div`
  width: 50%;
  border: 1px dashed #000; // todo: remove
  position: relative;
  overflow: hidden;
  height: 539px;
  padding-top: 100px;
`;

export const LearnTitleStyled = styled.h2`
  color: #146ee4;
  font-size: 102px;
  font-weight: 700;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
`;

export const LearnDescriptionStyled = styled.p`
  color: #494444;
  font-size: 24px;
  max-width: 555px;
  text-align: center;
  margin: 20px auto 0 auto;
`;

export const LearnImageStyled = styled.img`
  position: absolute;
  top: 0;
  //right: -50%;
  right: -33%;
  width: 539px;
  height: auto;
`;

export const LearnButtonStyles = css`
  border: 4px solid #f21e1e;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  padding: 20px;
  color: #f21e1e;
  font-size: 24px;
  font-weight: 600;
  border-radius: 0;
  margin: 60px auto 0 auto;
  display: flex;
  justify-content: center;
`;
