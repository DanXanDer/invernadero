import { Person } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";

const columnOptions = {
  headerAlign: "left",
  width: 190,
  align: "left",
};

export const TableColumnsUsuarios = () => {
  const columns = [
    { field: "nombreUsuario", headerName: "Usuario", ...columnOptions },
    { field: "nombres", headerName: "Nombre", ...columnOptions },
    { field: "apellidos", headerName: "Apellidos", ...columnOptions },
    { field: "correo", headerName: "Correo", ...columnOptions },
    { field: "tipo", headerName: "Tipo", ...columnOptions },
    {
      field: "estado",
      headerName: "Estado",
      ...columnOptions,
      renderCell: ({ formattedValue }) => {
        const color = formattedValue === 1 ? "success.dark" : "error.dark";
        const text = formattedValue === 1 ? "Habilitado" : "Deshabilitado";
        return <Typography color={color}>{text}</Typography>;
      },
    },
    {
      field: "accion",
      headerName: "Acción",
      ...columnOptions,
      renderCell: ({ row }) => {
        const { estado } = row;
        const text = estado === 1 ? "Deshabilitar" : "Habilitar";
        const color = estado === 1 ? "error" : "success";
        return (
          <Button variant="contained" color={color} startIcon={<Person />}>
            {text}
          </Button>
        );
      },
    },
  ];

  return columns;
};
