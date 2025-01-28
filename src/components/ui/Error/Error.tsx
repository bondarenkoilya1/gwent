import { FC } from "react";

import { ErrorProps } from "../../../types";

import { UnspecifiedError } from "./UnspecifiedError";

export const Error: FC<ErrorProps> = ({ errorCode, unspecifiedErrorMessage }) => {
  switch (errorCode) {
    // case "404":
    //   return <></>;
    default:
      return <UnspecifiedError errorMessage={unspecifiedErrorMessage} />;
  }
};
