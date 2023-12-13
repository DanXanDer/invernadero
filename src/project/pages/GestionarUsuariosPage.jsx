import { Box, Button } from "@mui/material";
import { GestionInvernaderoLayout } from "../layout";
import { PersonAdd } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { CustomNoRowsOverlay, TableColumnsUsuarios } from "../components";

const usuarios = [
  {
    id: 1,
    nombreUsuario: "usuario1",
    nombres: "Juan",
    apellidos: "Pérez",
    correo: "juan.perez@example.com",
    tipo: "Administrador",
    estado: 1,
  },
  {
    id: 2,
    nombreUsuario: "usuario2",
    nombres: "María",
    apellidos: "Gómez",
    correo: "maria.gomez@example.com",
    tipo: "Usuario",
    estado: 0,
  },
  {
    id: 3,
    nombreUsuario: "usuario3",
    nombres: "Carlos",
    apellidos: "Rodríguez",
    correo: "carlos.rodriguez@example.com",
    tipo: "Usuario",
    estado: 1,
  },
  // Agrega más usuarios según sea necesario
  {
    id: 4,
    nombreUsuario: "usuario4",
    nombres: "Laura",
    apellidos: "Fernández",
    correo: "laura.fernandez@example.com",
    tipo: "Usuario",
    estado: 0,
  },
  {
    id: 5,
    nombreUsuario: "usuario5",
    nombres: "Andrés",
    apellidos: "López",
    correo: "andres.lopez@example.com",
    tipo: "Administrador",
    estado: 1,
  },
  {
    id: 6,
    nombreUsuario: "usuario6",
    nombres: "Ana",
    apellidos: "Sánchez",
    correo: "ana.sanchez@example.com",
    tipo: "Usuario",
    estado: 0,
  },
  {
    id: 7,
    nombreUsuario: "usuario7",
    nombres: "Pedro",
    apellidos: "Martínez",
    correo: "pedro.martinez@example.com",
    tipo: "Usuario",
    estado: 1,
  },
  {
    id: 8,
    nombreUsuario: "usuario8",
    nombres: "Sofía",
    apellidos: "Gutiérrez",
    correo: "sofia.gutierrez@example.com",
    tipo: "Usuario",
    estado: 0,
  },
  {
    id: 9,
    nombreUsuario: "usuario9",
    nombres: "Daniel",
    apellidos: "Hernández",
    correo: "daniel.hernandez@example.com",
    tipo: "Administrador",
    estado: 1,
  },
  {
    id: 10,
    nombreUsuario: "usuario10",
    nombres: "Elena",
    apellidos: "Díaz",
    correo: "elena.diaz@example.com",
    tipo: "Usuario",
    estado: 0,
  },
];

export const GestionarUsuariosPage = () => {
  const navigate = useNavigate();

  const handleCrearUsuarioNavigate = () => {
    navigate("/invernadero/crear-usuario");
  };

  return (
    <GestionInvernaderoLayout>
      <Button
        variant="contained"
        sx={{
          mb: 2,
        }}
        startIcon={<PersonAdd />}
        onClick={handleCrearUsuarioNavigate}
      >
        Crear usuario
      </Button>
      <Box sx={{ height: 700 }}>
        <DataGrid
          disableRowSelectionOnClick
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          columns={TableColumnsUsuarios()}
          rows={usuarios}
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
