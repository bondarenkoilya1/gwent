import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import {
  CARDS_IN_DECK,
  NORTHERN_REALMS_CARDS_ARRAY,
  NORTHERN_REALMS_CARDS_QUANTITY
} from "../../../constants";
import { CardProps } from "../../../types/components";
import { pickUniqueRandomNumbers } from "../../../utils";
import { Card } from "../Card";
import { CardRow } from "../CardRow";

const fetchAndSetCards = async (
  setCards: React.Dispatch<React.SetStateAction<CardProps[]>>,
  setCardsInDeck: React.Dispatch<React.SetStateAction<CardProps[]>>
) => {
  try {
    const response = await axios.get<CardProps[]>(NORTHERN_REALMS_CARDS_ARRAY);
    const fetchedCards = response.data;

    const arrayOfUniqueNumbers = pickUniqueRandomNumbers(
      CARDS_IN_DECK,
      NORTHERN_REALMS_CARDS_QUANTITY
    );

    const selectedCards = arrayOfUniqueNumbers.map((index) => fetchedCards[index]);

    const remainingCards = fetchedCards.filter((_, index) => !arrayOfUniqueNumbers.includes(index));

    setCards(remainingCards);
    setCardsInDeck(selectedCards);
  } catch (error) {
    console.error("Error fetching cards:", error);
  }
};

export const Deck = () => {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [cardsInDeck, setCardsInDeck] = useState<CardProps[]>([]);

  useEffect(() => {
    const fetchCards = async () => await fetchAndSetCards(setCards, setCardsInDeck);

    fetchCards().catch((error) => console.error("Error fetching cards:", error));
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <h2>Deck</h2>
      <CardRow>
        {cardsInDeck.map(({ name, description, type, points }) => (
          <Card name={name} description={description} type={type} points={points} key={uuidv4()} />
        ))}
      </CardRow>

      {renderRestOfTheCards(cards)}
    </div>
  );
};

// probably useless component, todo: remove later
// now it's just to make code more readable
function renderRestOfTheCards(cards: CardProps[]) {
  return (
    <>
      <h2 style={{ marginTop: "30px" }}>Rest</h2>
      {cards.length >= 1 && (
        <div style={{ position: "relative", width: "200px" }}>
          {renderFirstCard(cards[0], 0, 0)}
          {cards.length >= 2 && renderFirstCard(cards[0], -1, -5)}
          {cards.length >= 3 && renderFirstCard(cards[0], -2, -10)}
        </div>
      )}
    </>
  );
}

// probably useless component, todo: remove later
// now it's just to make code more readable
function renderFirstCard(firstCard: CardProps, zIndex: number, positionRight: number) {
  const { name, description, type, points } = firstCard;

  return (
    <div
      style={{ position: "absolute", zIndex: `${zIndex}`, top: "0", right: `${positionRight}%` }}>
      <Card name={name} description={description} type={type} points={points} key={uuidv4()} />
    </div>
  );
}
