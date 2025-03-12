import { useEffect, useState } from "react";

import { del, get } from "../../http";

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

  const deleteCardSet = async (cardId: string) => {
    setIsLoading(true);
    setError(null);

    try {
      await del("/card-set", `/${cardId}`);
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

  return (
    <section style={{ color: "#000" }}>
      <h1>Admin panel</h1>
      <button onClick={fetchCardSets}>Update</button>
      <div>{error && `Error occurred. ${error}`}</div>
      {isLoading ? (
        "Loading..."
      ) : (
        <ul>
          {cardSets &&
            cardSets.map((set: any) => (
              <div key={set._id} style={{ marginTop: "20px" }}>
                <li style={{ fontSize: "24px", marginBottom: "10px" }}>
                  CardSet name: <span style={{ fontWeight: 700 }}>{set.cardSetName}</span>{" "}
                  <span
                    onClick={() => deleteCardSet(set._id)}
                    style={{
                      color: "red",
                      fontSize: "16px",
                      cursor: "pointer",
                      userSelect: "none"
                    }}>
                    [DELETE]
                  </span>
                </li>
                <div>
                  {set.cards.map((card: any) => (
                    <ul key={card._id} style={{ marginBottom: "10px" }}>
                      <li>Card name: {card.name}</li>
                      <li>Card type: {card.type}</li>
                      <li>Card points: {card.points}</li>
                    </ul>
                  ))}
                </div>
              </div>
            ))}
        </ul>
      )}
    </section>
  );
};
