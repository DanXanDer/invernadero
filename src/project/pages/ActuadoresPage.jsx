import { Grid, Paper, Typography } from "@mui/material";
import { GestionInvernaderoLayout } from "../layout";
import { CardVariable } from "../components";
import { useNavigate } from "react-router-dom";

const actuadores = [
  {
    id: 1,
    nombre: "Relé SRD-05VDC-SL-C",
    descripcion:
      "El relé SRD-05VDC-SL-C es un dispositivo electromecánico que permite controlar el flujo de corriente eléctrica en un circuito. Este componente es utilizado para activar o desactivar cargas eléctricas de alto voltaje, como bombas de agua, luces, motores, entre otros.",
    pathImage: "/src/assets/images/rele05.jpg",
  },
  {
    id: 2,
    nombre: "Motor servo micro SG90",
    descripcion:
      "El motor servo micro SG90 es un actuador que permite controlar el ángulo de rotación de un eje. Este dispositivo es utilizado para mover objetos, como válvulas, compuertas, entre otros.",
    pathImage: "/src/assets/images/servo.jpg",
  },
  {
    id: 3,
    nombre: "Motor paso a paso 14 kg/cm, NEMA 17/23",
    descripcion:
      "El motor paso a paso 14 kg/cm, NEMA 17/23 es un actuador que permite controlar el ángulo de rotación de un eje. Este dispositivo es utilizado para mover objetos, como válvulas, compuertas, entre otros.",
    pathImage: "/src/assets/images/motorpp.png",
  },
];

export const ActuadoresPage = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/invernadero/actuadores/actividad-actuador");
  };

  return (
    <GestionInvernaderoLayout>
      <Grid component={Paper} p={1} mb={4} textAlign="center">
        <Typography component="h2" variant="span">
          Lista de actuadores
        </Typography>
      </Grid>
      {
        <Grid container spacing={2} justifyContent="space-between">
          {actuadores.map(({ id, nombre, descripcion, pathImage }) => {
            return (
              <CardVariable
                key={id}
                nombre={nombre}
                descripcion={descripcion}
                pathImage={pathImage}
                handleCardClick={handleCardClick}
              />
            );
          })}
        </Grid>
      }
    </GestionInvernaderoLayout>
  );
};
