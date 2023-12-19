import { Person } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { get, ref, onValue, update } from "firebase/database";

const columnOptions = {
  headerAlign: "left",
  width: 300,
  align: "left",
};

export const TableColumnsVariable = () => {
  const columns = [
    { field: "lectura", headerName: "Valor de lectura", ...columnOptions },
    {
      field: "unidadMedida",
      headerName: "Unidad de medida",
      ...columnOptions,
    },
    { field: "fecha", headerName: "Fecha", ...columnOptions },
    { field: "hora", headerName: "Hora", ...columnOptions },
    { field: "msg", headerName: "Descripción", ...columnOptions },
  ];

  return columns;
};
