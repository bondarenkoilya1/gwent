import { useEffect, useState } from "react";

import {
  AdminPanelButtonStyles,
  AdminPanelCardSetsStyled,
  AdminPanelErrorStyled,
  AdminPanelStyled,
  AdminPanelTitleStyled
} from "./styled";
import styled from "@emotion/styled";

import { Button } from "src/components";
import { CardSet } from "src/components/CardSet";

import { CardSetProps, CardSets } from "src/types";

import { validateError } from "src/utils";

import { fetchItem } from "src/api";

// In future this will be brought out to different components

type ErrorFromServerProps = {
  message: string;
};

const AdminPanelButtonStyled = styled(Button)(AdminPanelButtonStyles);

export const AdminPanel = () => {
  const [cardSets, setCardSets] = useState<CardSets>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* JOIN SOMEHOW. MAYBE HOOK */
  const fetchCardSets = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const sets: CardSets = await fetchItem<CardSets>("/card-sets");
      setCardSets((prev) => (JSON.stringify(prev) === JSON.stringify(sets) ? prev : sets));
    } catch (error) {
      validateError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteCardSet = async (cardSetId: string) => {
    setError(null);

    const options = {
      method: "DELETE"
    };

    try {
      await fetchItem<ErrorFromServerProps>(`/card-set/${cardSetId}`, options);
      fetchCardSets();
    } catch (error) {
      validateError(error);
    }
  };
  /* JOIN SOMEHOW. MAYBE HOOK */

  useEffect(() => {
    fetchCardSets();
  }, []);

  const renderError = (error: string | null) =>
    error && <AdminPanelErrorStyled>Error occurred. {error}</AdminPanelErrorStyled>;

  return (
    <AdminPanelStyled>
      <AdminPanelTitleStyled>Admin panel</AdminPanelTitleStyled>
      <AdminPanelButtonStyled onClick={fetchCardSets}>Update</AdminPanelButtonStyled>
      {renderError(error)}
      {isLoading ? (
        "Loading..."
      ) : (
        <AdminPanelCardSetsStyled>
          {cardSets &&
            cardSets.map((set: CardSetProps) => (
              <CardSet set={set} deleteCardSet={deleteCardSet} key={set._id} />
            ))}
        </AdminPanelCardSetsStyled>
      )}
    </AdminPanelStyled>
  );
};
