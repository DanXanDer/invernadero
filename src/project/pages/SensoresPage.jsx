import { Grid, Paper, Typography } from "@mui/material";
import { GestionInvernaderoLayout } from "../layout";
import { CardVariable } from "../components";
import { useNavigate } from "react-router-dom";

const sensores = [
  {
    id: 1,
    nombre: "Sensor DHT11",
    descripcion:
      "El sensor DHT11 es un sensor de temperatura y humedad relativa. Este dispositivo es utilizado para medir la temperatura y humedad relativa del aire.",
    pathImage: "/src/assets/images/dht11.jpg",
  },
  {
    id: 2,
    nombre: "Soil Moisture Sensor",
    descripcion:
      "El sensor de humedad de suelo es un dispositivo que permite medir la humedad del suelo. Este componente es utilizado para medir la humedad del suelo.",
    pathImage: "/src/assets/images/soil.jpg",
  },
  {
    id: 3,
    nombre: "BH1750",
    descripcion:
      "El sensor BH1750 es un sensor de luz. Este dispositivo es utilizado para medir la intensidad de luz.",
    pathImage: "/src/assets/images/bh1750.jpg",
  },
  {
    id: 4,
    nombre: "MiCS-5524",
    descripcion:
      "El sensor MiCS-5524 es un sensor de gases. Este dispositivo es utilizado para medir la concentración de gases.",
    pathImage: "/src/assets/images/mics-5524.jpg",
  },
  {
    id: 5,
    nombre: "HC-SR501",
    descripcion:
      "El sensor HC-SR501 es un sensor de movimiento. Este dispositivo es utilizado para detectar movimiento.",
    pathImage: "/src/assets/images/hc-sr501.jpg",
  },
  {
    id: 6,
    nombre: "HC-SRO4",
    descripcion:
      "El sensor HC-SRO4 es un sensor de distancia. Este dispositivo es utilizado para medir la distancia de un objeto.",
    pathImage: "/src/assets/images/hc-sro4.jpg",
  },
];

export const SensoresPage = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/invernadero/sensores/actividad-sensor");
  };
  return (
    <GestionInvernaderoLayout>
      <Grid component={Paper} p={1} mb={4} textAlign="center">
        <Typography component="h2" variant="span">
          Lista de sensores
        </Typography>
      </Grid>
      {
        <Grid container spacing={2} justifyContent="space-between">
          {sensores.map(({ id, nombre, descripcion, pathImage }) => {
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
