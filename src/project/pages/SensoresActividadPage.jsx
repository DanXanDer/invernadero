import { Box, Grid, Paper, Typography } from "@mui/material";
import { GestionInvernaderoLayout } from "../layout";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { TableColumnsSensor } from "../components";

const obtenerEstado = (temperatura, humedad) => {
  const umbralTemperatura = 25;
  const umbralHumedad = 60;

  if (temperatura > umbralTemperatura || humedad > umbralHumedad) {
    return "Por encima del umbral seguro";
  } else if (temperatura < umbralTemperatura || humedad < umbralHumedad) {
    return "Por debajo del umbral seguro";
  } else {
    return "Dentro del rango seguro";
  }
};

const lecturasRows = [
  {
    id: 1,
    temperatura: 25.5,
    humedad: 60,
    timestamp: new Date(),
    estado: obtenerEstado(25.5, 60),
  },
  {
    id: 2,
    temperatura: 26.2,
    humedad: 58,
    timestamp: new Date(),
    estado: obtenerEstado(26.2, 58),
  },
  {
    id: 3,
    temperatura: 24.8,
    humedad: 62,
    timestamp: new Date(),
    estado: obtenerEstado(24.8, 62),
  },
  {
    id: 4,
    temperatura: 24.8,
    humedad: 62,
    timestamp: new Date(),
    estado: obtenerEstado(24.8, 62),
  },
  {
    id: 5,
    temperatura: 24.8,
    humedad: 62,
    timestamp: new Date(),
    estado: obtenerEstado(24.8, 62),
  },
  {
    id: 6,
    temperatura: 24.8,
    humedad: 62,
    timestamp: new Date(),
    estado: obtenerEstado(24.8, 62),
  },
  {
    id: 7,
    temperatura: 24.8,
    humedad: 62,
    timestamp: new Date(),
    estado: obtenerEstado(24.8, 62),
  },
  {
    id: 8,
    temperatura: 24.8,
    humedad: 62,
    timestamp: new Date(),
    estado: obtenerEstado(24.8, 62),
  },
  {
    id: 9,
    temperatura: 24.8,
    humedad: 62,
    timestamp: new Date(),
    estado: obtenerEstado(24.8, 62),
  },
  {
    id: 10,
    temperatura: 24.8,
    humedad: 62,
    timestamp: new Date(),
    estado: obtenerEstado(24.8, 62),
  },
  {
    id: 11,
    temperatura: 24.8,
    humedad: 62,
    timestamp: new Date(),
    estado: obtenerEstado(24.8, 62),
  },
  {
    id: 12,
    temperatura: 24.8,
    humedad: 62,
    timestamp: new Date(),
    estado: obtenerEstado(24.8, 62),
  },
  {
    id: 13,
    temperatura: 24.8,
    humedad: 62,
    timestamp: new Date(),
    estado: obtenerEstado(24.8, 62),
  },
  {
    id: 14,
    temperatura: 24.8,
    humedad: 62,
    timestamp: new Date(),
    estado: obtenerEstado(24.8, 62),
  },
  {
    id: 15,
    temperatura: 24.8,
    humedad: 62,
    timestamp: new Date(),
    estado: obtenerEstado(24.8, 62),
  },
];

export const SensoresActividadPage = () => {
  return (
    <GestionInvernaderoLayout>
      <Grid component={Paper} p={1} mb={4} textAlign="center">
        <Typography component="h2" variant="span">
          Sensor DHT11
        </Typography>
      </Grid>
      <Box sx={{ height: 700 }}>
        <DataGrid
          disableRowSelectionOnClick
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          columns={TableColumnsSensor()}
          rows={lecturasRows}
          slots={{
            toolbar: GridToolbar,
          }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
      </Box>
    </GestionInvernaderoLayout>
  );
};
