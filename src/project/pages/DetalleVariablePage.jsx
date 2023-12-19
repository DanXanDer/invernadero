import { useLocation } from "react-router-dom";
import { GestionInvernaderoLayout } from "../layout";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { CustomNoRowsOverlay, TableColumnsVariable } from "../components";
import { useEffect, useState } from "react";
import { ref, set, push, onValue } from "firebase/database";
import { db } from "../../firebase/firebase";
import { v4 as uuidv4 } from "uuid";

export const DetalleVariablePage = () => {
  const { state } = useLocation();
  const { nombreVariable, nombre } = state;

  const [lecturaActual, setLecturaActual] = useState({});
  const [lecturas, setLecturas] = useState([]);

  useEffect(() => {
    const query = ref(db, `sensores/${nombreVariable}`);
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      setLecturaActual({
        id: uuidv4(),
        lectura: data.lectura,
        unidadMedida: data.unidadMedida,
        fecha: data.fecha.split(" ")[0],
        hora: data.fecha.split(" ")[1],
        msg: data.msg,
      });
    });
  }, []);

  useEffect(() => {
    const historialLecturasSensorRef = ref(
      db,
      `historialLecturas/${nombreVariable}`
    );
    push(historialLecturasSensorRef, lecturaActual);

    const query = ref(db, `historialLecturas/${nombreVariable}`);
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      const lecturas = [];
      for (let id in data) {
        console.log(data[id]);
        lecturas.push({
          id: id,
          lectura: data[id].lectura,
          unidadMedida: data[id].unidadMedida,
          fecha: data[id].fecha,
          hora: data[id].hora,
          msg: data[id].msg,
        });
      }
      lecturas.sort((a, b) => {
        const fechaA = new Date(`${a.fecha} ${a.hora}`);
        const fechaB = new Date(`${b.fecha} ${b.hora}`);
        return fechaA - fechaB;
      });

      setLecturas(lecturas);
    });
  }, [lecturaActual]);

  return (
    <GestionInvernaderoLayout>
      <Grid component={Paper} p={1} mb={2} textAlign="center">
        <Typography component="h2" variant="span">
          {nombre}
        </Typography>
      </Grid>
      <Box sx={{ height: 700 }}>
        <DataGrid
          disableRowSelectionOnClick
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          columns={TableColumnsVariable()}
          rows={lecturas}
          slots={{
            toolbar: GridToolbar,
            noRowsOverlay: CustomNoRowsOverlay,
            noResultsOverlay: CustomNoRowsOverlay,
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
