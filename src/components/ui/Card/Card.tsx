import { FC } from "react";

import { CardProps } from "../../../types/components";

export const Card: FC<CardProps> = ({ name, description, type, points, ...attrs }) => {
  return (
    <li
      style={{
        border: "2px solid black",
        padding: "10px",
        width: "200px",
        height: "250px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        position: "relative"
      }}
      {...attrs}>
      <h2 style={{ marginBottom: "20px", fontWeight: "700", fontSize: "28px" }}>{name}</h2>
      <p style={{ maxWidth: "120px" }}>{description}</p>
      <p style={{ position: "absolute", top: "10px", right: "10px" }}>Type: {type}</p>
      <p style={{ position: "absolute", bottom: "10px", left: "10px" }}>Points: {points}</p>
    </li>
  );
};
