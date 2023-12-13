import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes";
import { GestionInvernaderoRoutes } from "../project/routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<Navigate to="/auth" />} />
      <Route path="/invernadero/*" element={<GestionInvernaderoRoutes />} />
    </Routes>
  );
};
