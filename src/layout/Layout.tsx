import { Route, Routes } from "react-router-dom";

import { Main } from "../pages";

export const Layout = () => {
  return (
    <Routes>
      <Route index path="/" element={<Main />} />
    </Routes>
  );
};
