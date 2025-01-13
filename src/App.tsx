import { Global } from "@emotion/react";

import { GlobalStyle } from "./styled";

import { Layout } from "./layout";

export const App = () => {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Layout />
    </>
  );
};
