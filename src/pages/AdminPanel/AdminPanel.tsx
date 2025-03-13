import { useEffect, useState } from "react";

import {
  AdminPanelButtonStyles,
  AdminPanelCardSetsStyled,
  AdminPanelErrorStyled,
  AdminPanelStyled,
  AdminPanelTitleStyled
} from "./styled";
import styled from "@emotion/styled";

import { Button } from "../../components";
import { CardSet } from "../../components/CardSet";
import { deleteItem, get } from "../../http";
import { CardSetProps, CardSets } from "../../types";

// In future this will be brought out to different components

const AdminPanelButtonStyled = styled(Button)(AdminPanelButtonStyles);

export const AdminPanel = () => {
  const [cardSets, setCardSets] = useState<CardSets>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCardSets = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const sets: CardSets = await get("/card-sets");
      setCardSets((prev) => (JSON.stringify(prev) === JSON.stringify(sets) ? prev : sets));
    } catch (error) {
      // todo: bring out. DRY
      if (error instanceof Error) {
        setError(error.message);
      }

      setError("Unexpected error, please try again later");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteCardSet = async (cardSetId: string) => {
    setIsLoading(true);
    setError(null);

    try {
      await deleteItem("/card-set", `/${cardSetId}`);
      await fetchCardSets();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }

      setError("Unexpected error, please try again later");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCardSets();
  }, [cardSets]);

  const renderError = (error: string | null) =>
    error && <AdminPanelErrorStyled>Error occurred. {error}</AdminPanelErrorStyled>;

  // @ts-ignore
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
