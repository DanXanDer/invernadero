import { Grid } from "@mui/material";
import { CardVariable } from "../components";
import { GestionInvernaderoLayout } from "../layout";
import { useNavigate } from "react-router-dom";

const variables = [
  {
    id: 1,
    nombre: "Humedad del Ambiente",
    nombreValue: "humedad-ambiente",
    descripcion:
      "La humedad del ambiente se refiere al nivel de humedad presente en el aire que rodea el invernadero. Este parámetro es crucial para el crecimiento saludable de las plantas y puede afectar diversos procesos biológicos.",
    pathImage: "/src/assets/images/humedad_ambiente.jpg",
  },
  {
    id: 2,
    nombre: "Humedad del Suelo",
    nombreValue: "humedad-suelo",
    descripcion:
      "La humedad del suelo indica la cantidad de agua presente en el sustrato donde se encuentran las plantas. Este factor es esencial para determinar la frecuencia y cantidad de riego necesario para mantener condiciones óptimas para el crecimiento vegetal.",
    pathImage: "/src/assets/images/humedad_suelo.jpg",
  },
  {
    id: 3,
    nombre: "Temperatura del Ambiente",
    nombreValue: "temperatura",
    descripcion:
      "La temperatura del ambiente se refiere al nivel térmico del aire en el invernadero. Este parámetro es vital, ya que influye directamente en el desarrollo de las plantas, afectando la fotosíntesis, la transpiración y otros procesos metabólicos.",
    pathImage: "/src/assets/images/temperatura.jpg",
  },
  {
    id: 4,
    nombre: "Luz",
    nombreValue: "luz",
    descripcion:
      "La medición de la luz se relaciona con la cantidad y calidad de la radiación luminosa recibida por las plantas. Este factor es crucial para la fotosíntesis y, por lo tanto, impacta en el crecimiento y desarrollo de las plantas.",
    pathImage: "/src/assets/images/luz.jpg",
  },
  {
    id: 5,
    nombre: "Gases",
    nombreValue: "gases",
    descripcion:
      "La monitorización de gases se refiere a la medición de la concentración de gases en el invernadero, como dióxido de carbono (CO2). Estos gases influyen en la fotosíntesis y respiración de las plantas, afectando su salud y rendimiento.",
    pathImage: "/src/assets/images/gases.jpg",
  },
  {
    id: 6,
    nombre: "Movimiento",
    nombreValue: "movimiento",
    descripcion:
      "La detección de movimiento se utiliza para identificar cambios en el entorno, como el movimiento de personas, animales o cambios en las condiciones climáticas. Este parámetro puede ser esencial para la seguridad y el control del invernadero.",
    pathImage: "/src/assets/images/movimiento.jpg",
  },
];

export const MonitoreoPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (nombreVariable, nombre) => {
    navigate("/invernadero/variable", {
      state: { nombreVariable, nombre },
    });
  };

  return (
    <GestionInvernaderoLayout>
      <Grid container spacing={2} justifyContent="space-between">
        {variables.map(({ id, nombre, descripcion, pathImage, nombreValue }) => {
          return (
            <CardVariable
              key={id}
              nombre={nombre}
              nombreValue={nombreValue}
              descripcion={descripcion}
              pathImage={pathImage}
              handleCardClick={handleCardClick}
            />
          );
        })}
      </Grid>
    </GestionInvernaderoLayout>
  );
};
