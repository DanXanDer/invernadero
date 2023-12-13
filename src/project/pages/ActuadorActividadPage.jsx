import { Box, Grid, Paper, Typography } from "@mui/material";
import { GestionInvernaderoLayout } from "../layout";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { TableColumnsActuador } from "../components";

const actividadesReleRows = [
  {
    id: 1,
    numero_actividad: 123,
    descripcion: "Encendido del Rele 05",
    estado: "Activado",
    fecha: "2023-01-15T10:30:00",
  },
  {
    id: 2,
    numero_actividad: 124,
    descripcion: "Apagado del Rele 05",
    estado: "Desactivado",
    fecha: "2023-01-16T15:45:00",
  },
  {
    id: 3,
    numero_actividad: 125,
    descripcion: "Encendido del Rele 05",
    estado: "Activado",
    fecha: "2023-01-17T08:20:00",
  },
  {
    id: 4,
    numero_actividad: 126,
    descripcion: "Apagado del Rele 05",
    estado: "Desactivado",
    fecha: "2023-01-18T14:15:00",
  },
  {
    id: 5,
    numero_actividad: 127,
    descripcion: "Encendido del Rele 05",
    estado: "Activado",
    fecha: "2023-01-19T11:30:00",
  },
  {
    id: 6,
    numero_actividad: 128,
    descripcion: "Apagado del Rele 05",
    estado: "Desactivado",
    fecha: "2023-01-20T16:45:00",
  },
  {
    id: 7,
    numero_actividad: 129,
    descripcion: "Encendido del Rele 05",
    estado: "Activado",
    fecha: "2023-01-21T09:20:00",
  },
  {
    id: 8,
    numero_actividad: 130,
    descripcion: "Apagado del Rele 05",
    estado: "Desactivado",
    fecha: "2023-01-22T13:15:00",
  },
  {
    id: 9,
    numero_actividad: 131,
    descripcion: "Encendido del Rele 05",
    estado: "Activado",
    fecha: "2023-01-23T12:30:00",
  },
  {
    id: 10,
    numero_actividad: 132,
    descripcion: "Apagado del Rele 05",
    estado: "Desactivado",
    fecha: "2023-01-24T17:45:00",
  },
  {
    id: 11,
    numero_actividad: 133,
    descripcion: "Encendido del Rele 05",
    estado: "Activado",
    fecha: "2023-01-25T10:30:00",
  },
  {
    id: 12,
    numero_actividad: 134,
    descripcion: "Apagado del Rele 05",
    estado: "Desactivado",
    fecha: "2023-01-26T15:45:00",
  },
  {
    id: 13,
    numero_actividad: 135,
    descripcion: "Encendido del Rele 05",
    estado: "Activado",
    fecha: "2023-01-27T08:20:00",
  },
  {
    id: 14,
    numero_actividad: 136,
    descripcion: "Apagado del Rele 05",
    estado: "Desactivado",
    fecha: "2023-01-28T14:15:00",
  },
  {
    id: 15,
    numero_actividad: 137,
    descripcion: "Encendido del Rele 05",
    estado: "Activado",
    fecha: "2023-01-29T11:30:00",
  },
  {
    id: 16,
    numero_actividad: 138,
    descripcion: "Apagado del Rele 05",
    estado: "Desactivado",
    fecha: "2023-01-30T16:45:00",
  },
  {
    id: 17,
    numero_actividad: 139,
    descripcion: "Encendido del Rele 05",
    estado: "Activado",
    fecha: "2023-01-31T09:20:00",
  },
  {
    id: 18,
    numero_actividad: 140,
    descripcion: "Apagado del Rele 05",
    estado: "Desactivado",
    fecha: "2023-02-01T13:15:00",
  },
  {
    id: 19,
    numero_actividad: 141,
    descripcion: "Encendido del Rele 05",
    estado: "Activado",
    fecha: "2023-02-02T12:30:00",
  },
  {
    id: 20,
    numero_actividad: 142,
    descripcion: "Apagado del Rele 05",
    estado: "Desactivado",
    fecha: "2023-02-03T17:45:00",
  },
  {
    id: 21,
    numero_actividad: 143,
    descripcion: "Encendido del Rele 05",
    estado: "Activado",
    fecha: "2023-02-04T10:30:00",
  },
  {
    id: 22,
    numero_actividad: 144,
    descripcion: "Apagado del Rele 05",
    estado: "Desactivado",
    fecha: "2023-02-05T15:45:00",
  },
  {
    id: 23,
    numero_actividad: 145,
    descripcion: "Encendido del Rele 05",
    estado: "Activado",
    fecha: "2023-02-06T08:20:00",
  },
  {
    id: 24,
    numero_actividad: 146,
    descripcion: "Apagado del Rele 05",
    estado: "Desactivado",
    fecha: "2023-02-07T14:15:00",
  },
  {
    id: 25,
    numero_actividad: 147,
    descripcion: "Encendido del Rele 05",
    estado: "Activado",
    fecha: "2023-02-08T11:30:00",
  },
  {
    id: 26,
    numero_actividad: 148,
    descripcion: "Apagado del Rele 05",
    estado: "Desactivado",
    fecha: "2023-02-09T16:45:00",
  },
  {
    id: 27,
    numero_actividad: 149,
    descripcion: "Encendido del Rele 05",
    estado: "Activado",
    fecha: "2023-02-10T09:20:00",
  },
  {
    id: 28,
    numero_actividad: 150,
    descripcion: "Apagado del Rele 05",
    estado: "Desactivado",
    fecha: "2023-02-11T13:15:00",
  },
  {
    id: 29,
    numero_actividad: 151,
    descripcion: "Encendido del Rele 05",
    estado: "Activado",
    fecha: "2023-02-12T12:30:00",
  },
  {
    id: 30,
    numero_actividad: 152,
    descripcion: "Apagado del Rele 05",
    estado: "Desactivado",
    fecha: "2023-02-13T17:45:00",
  },
];

export const ActuadorActividadPage = () => {
  return (
    <GestionInvernaderoLayout>
      <Grid component={Paper} p={1} mb={4} textAlign="center">
        <Typography component="h2" variant="span">
          Relé SRD-05VDC-SL-C
        </Typography>
      </Grid>
      <Box sx={{ height: 700 }}>
        <DataGrid
          disableRowSelectionOnClick
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          columns={TableColumnsActuador()}
          rows={actividadesReleRows}
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
