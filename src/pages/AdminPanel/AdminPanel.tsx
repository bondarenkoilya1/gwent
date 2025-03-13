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

// In future this will be brought out to different components

const AdminPanelButtonStyled = styled(Button)(AdminPanelButtonStyles);

export const AdminPanel = () => {
  const [cardSets, setCardSets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCardSets = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const sets: any = await get("/card-sets");
      setCardSets((prev) => (JSON.stringify(prev) === JSON.stringify(sets) ? prev : sets));
    } catch (error: any) {
      setError(error.message);
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
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCardSets();
  }, [cardSets]);

  const renderError: any = (error: any) =>
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
            cardSets.map((set: any) => <CardSet set={set} deleteCardSet={deleteCardSet} />)}
        </AdminPanelCardSetsStyled>
      )}
    </AdminPanelStyled>
  );
};
