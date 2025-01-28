import { useEffect, useState } from "react";
import axios from "axios";

import { CARDS_IN_DECK } from "../constants";
import { CardProps } from "../types";
import { pickUniqueRandomNumbers, validateError } from "../utils";

export const useCardSetup = (fullDeckName: string, fullDeckCardsQuantity: number) => {
  const [availableCards, setAvailableCards] = useState<CardProps[]>([]);
  const [cardsInDeck, setCardsInDeck] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAndSetCards = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get<CardProps[]>(fullDeckName);
      const fetchedCards = response.data;

      const arrayOfUniqueNumbers = pickUniqueRandomNumbers(
        // When I decide to change the number of cards in player's deck I do it only in one place
        CARDS_IN_DECK,
        fullDeckCardsQuantity
      );

      const selectedCards = arrayOfUniqueNumbers.map((index) => fetchedCards[index]);
      const remainingCards = fetchedCards.filter(
        (_, index) => !arrayOfUniqueNumbers.includes(index)
      );

      setAvailableCards(remainingCards);
      setCardsInDeck(selectedCards);
    } catch (error) {
      setError(validateError(error));
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAndSetCards();
  }, []);

  return { availableCards, cardsInDeck, loading, error, refetch: fetchAndSetCards };
};
