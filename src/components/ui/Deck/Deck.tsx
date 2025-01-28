import { v4 as uuidv4 } from "uuid";

import { NORTHERN_REALMS_CARDS_ARRAY, NORTHERN_REALMS_CARDS_QUANTITY } from "../../../constants";
import { useCardSetup } from "../../../hooks";
// import { CardProps } from "../../../types";
import { Card } from "../Card";
import { CardRow } from "../CardRow";

export const Deck = () => {
  const { cardsInDeck, loading, error } = useCardSetup(
    NORTHERN_REALMS_CARDS_ARRAY,
    NORTHERN_REALMS_CARDS_QUANTITY
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ width: "100%" }}>
      <h3>{error}</h3>
      <h2>Deck</h2>
      <CardRow>
        {cardsInDeck.map(({ name, description, type, points }) => (
          <Card name={name} description={description} type={type} points={points} key={uuidv4()} />
        ))}
      </CardRow>

      {/*{renderRestOfTheCards(availableCards)}*/}
    </div>
  );
};

// probably useless component, todo: remove later
// now it's just to make code more readable
// function renderRestOfTheCards(cards: CardProps[]) {
//   return (
//     <>
//       <h2 style={{ marginTop: "30px" }}>Rest</h2>
//       {cards.length >= 1 && (
//         <div style={{ position: "relative", width: "200px" }}>
//           {renderFirstCard(cards[0], 0, 0)}
//           {cards.length >= 2 && renderFirstCard(cards[0], -1, -5)}
//           {cards.length >= 3 && renderFirstCard(cards[0], -2, -10)}
//         </div>
//       )}
//     </>
//   );
// }

// probably useless component, todo: remove later
// now it's just to make code more readable
// function renderFirstCard(firstCard: CardProps, zIndex: number, positionRight: number) {
//   const { name, description, type, points } = firstCard;
//
//   return (
//     <div
//       style={{ position: "absolute", zIndex: `${zIndex}`, top: "0", right: `${positionRight}%` }}>
//       <Card name={name} description={description} type={type} points={points} key={uuidv4()} />
//     </div>
//   );
// }
