import { Navigate, Route, Routes } from "react-router-dom";

// import { Game, Main } from "../pages";
import { AdminPanel } from "src/pages";

export const Layout = () => {
  return (
    <Routes>
      {/*<Route index path="/" element={<Main />} />*/}
      {/*<Route path="/game" element={<Game />} />*/}

      {/* Temporary redirect to this page during coding it */}
      <Route path="/" element={<Navigate to="/admin-panel" />} />
      <Route path="/admin-panel" element={<AdminPanel />} />
    </Routes>
  );
};
