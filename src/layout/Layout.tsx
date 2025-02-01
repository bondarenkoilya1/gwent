import { Route, Routes } from "react-router-dom";

import { Game, Main } from "../pages";

export const Layout = () => {
  return (
    <Routes>
      <Route index path="/" element={<Main />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
};
