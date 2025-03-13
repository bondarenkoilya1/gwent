import { Card } from "./Card";
import { CardList } from "./CardList";

// zustand for deleteCardSet

export const CardSet = ({ set, deleteCardSet }: { set: any; deleteCardSet: any }) => {
  return (
    <div style={{ marginBottom: "30px" }}>
      <li style={{ fontSize: "24px", marginBottom: "10px" }}>
        <span style={{ textTransform: "uppercase", fontWeight: 700 }}>{set.cardSetName}</span>{" "}
        <span
          onClick={() => deleteCardSet(set._id)}
          style={{
            color: "red",
            fontSize: "12px",
            cursor: "pointer",
            userSelect: "none"
          }}>
          [DELETE THIS CARD SET]
        </span>
      </li>
      <CardList>
        {set.cards.map((card: any) => (
          <Card card={card} />
        ))}
      </CardList>
    </div>
  );
};
