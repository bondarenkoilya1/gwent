import { Global } from "@emotion/react";

import { GlobalStyle } from "./styled";

import { Layout } from "./layout";

// TODO: Deck and PlayerBoard are possibly not UI components, especially the first one
/* Card set – All cards available in the game for a faction.
   Deck – The specific set of cards a player builds before a match.
   Hand – The cards a player currently holds in a round. */
export const App = () => {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Layout />
    </>
  );
};
