import { useEffect, useState } from "react";
import axios from "axios";

import { ContainerStyled } from "../../styled";

import { Card } from "../../components/ui";
import { CardProps } from "../../types/components";
import { pickUniqueRandomNumbers } from "../../utils";

const CARDS_QUANTITY = 3;

export const Main = () => {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [deck, setDeck] = useState<CardProps[]>([]);

  useEffect(() => {
    axios
      .get<CardProps[]>("./cards.json")
      .then((response) => {
        const fetchedCards = response.data;
        setCards(fetchedCards);

        const arrayOfTwoUniqueNumbers = pickUniqueRandomNumbers(2, CARDS_QUANTITY);
        const selectedCards = arrayOfTwoUniqueNumbers.map((index) => fetchedCards[index]);

        const remainingCards = fetchedCards.filter(
          (_, index) => !arrayOfTwoUniqueNumbers.includes(index)
        );

        setCards(remainingCards);
        setDeck(selectedCards);
      })
      .catch((error) => console.error("Error fetching cards:", error));
  }, []);

  return (
    <ContainerStyled>
      <div style={{ width: "200px" }}>
        <h2>Deck</h2>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "50px"
          }}>
          {deck.map(({ name, description, type, points }: CardProps) => (
            <Card name={name} description={description} type={type} points={points} key={name} />
          ))}
        </ul>
      </div>
      <div style={{ width: "200px" }}>
        <h2>Rest of the cards:</h2>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
          {cards.map(({ name, description, type, points }: CardProps) => (
            <Card name={name} description={description} type={type} points={points} key={name} />
          ))}
        </ul>
      </div>
    </ContainerStyled>
  );
};
