import { FC } from "react";

import { CardWrapperProps } from "../../../types";

import { AdminPanelCard } from "./AdminPanelCard";

// todo: Fabric pattern. Variants: in Hand, at Admin Panel
export const Card: FC<CardWrapperProps> = ({ card, location = "board" }) => {
  switch (location) {
    case "board":
      return 1;
    case "adminPanel":
      return <AdminPanelCard card={card} />;
    default:
      return <p>Card variant was not specified (e.g "board")</p>;
  }

  // When I return to coding my plan is:
  // - CardList component bring to UI folder and render there default JSX, passing only array as param
  // - Bring board card component to a specific folder (rename it from hand to border) and render it in switch
  // - End this mess with paths. Write alises

  // return (
  //   <CardStyled onClick={onClick}>
  //     <CardNameStyled>{name}</CardNameStyled>
  //     {/*<CardDescriptionStyled>{description}</CardDescriptionStyled>*/}
  //     {/*<CardTypeStyled>*/}
  //     {/*  Type: <CardTextHighlighted>{type}</CardTextHighlighted>*/}
  //     {/*</CardTypeStyled>*/}
  //     {/*<CardPointsStyled>*/}
  //     {/*  Points: <CardTextHighlighted> {points}</CardTextHighlighted>*/}
  //     {/*</CardPointsStyled>*/}
  //   </CardStyled>
  // );
};
