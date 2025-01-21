import { FC } from "react";

import { Children } from "../../../types";

export const CardRow: FC<Children> = ({ children }) => {
  return (
    <ul
      style={{
        height: "251px",
        border: "1px solid #000",
        display: "flex",
        width: "100%",
        overflow: "hidden",
        overflowX: "auto"
      }}>
      {children}
    </ul>
  );
};
