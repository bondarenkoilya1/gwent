import React, { useEffect, useState } from "react";
import axios from "axios";

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
          <Card
            name={name}
            description={description}
            type={type}
            points={points}
            // todo: use library for uuids
            key={crypto.randomUUID()}
          />
        ))}
      </CardRow>

      <h2>Rest</h2>
      <CardRow>
        {cards.map(({ name, description, type, points }) => (
          <Card
            name={name}
            description={description}
            type={type}
            points={points}
            // todo: use library for uuids
            key={crypto.randomUUID()}
          />
        ))}
      </CardRow>
    </div>
  );
};
