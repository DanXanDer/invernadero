import { Navigate, Route, Routes } from "react-router-dom";
import {
  ActuadorActividadPage,
  ActuadoresPage,
  CrearUsuarioPage,
  DetalleVariablePage,
  GestionarUsuariosPage,
  MonitoreoPage,
  SensoresActividadPage,
  SensoresPage,
} from "../pages";

export const GestionInvernaderoRoutes = () => {
  return (
    <Routes>
      <Route path="monitoreo" element={<MonitoreoPage />} />
      <Route path="*" element={<Navigate to="monitoreo" />} />
      <Route path="variable" element={<DetalleVariablePage />} />
      <Route path="actuadores" element={<ActuadoresPage />} />
      <Route
        path="actuadores/actividad-actuador"
        element={<ActuadorActividadPage />}
      />
      <Route path="sensores" element={<SensoresPage />} />
      <Route
        path="sensores/actividad-sensor"
        element={<SensoresActividadPage />}
      />
      <Route path="usuarios" element={<GestionarUsuariosPage />} />
      <Route path="crear-usuario" element={<CrearUsuarioPage />} />
    </Routes>
  );
};
