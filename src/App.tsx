import { Global } from "@emotion/react";

import { GlobalStyle } from "./styled";

import { Layout } from "./layout";

// TODO: Deck and PlayerBoard are possibly not UI components, especially the first one
export const App = () => {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Layout />
    </>
  );
};
