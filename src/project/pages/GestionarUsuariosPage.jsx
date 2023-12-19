import { Box, Button } from "@mui/material";
import { GestionInvernaderoLayout } from "../layout";
import { PersonAdd } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { CustomNoRowsOverlay, TableColumnsUsuarios } from "../components";
import { get, ref, onValue, update } from "firebase/database";
import { db } from "../../firebase/firebase";
import { useEffect, useState } from "react";
import { showAlertMessage, showConfirmationMessage } from "../../helpers";

export const GestionarUsuariosPage = () => {
  const navigate = useNavigate();

  const [usuarios, setUsuarios] = useState([]);

  const handleCrearUsuarioNavigate = () => {
    navigate("/invernadero/crear-usuario");
  };

  useEffect(() => {
    const usersRef = ref(db, "users");

    const unsubscribe = onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const usuariosArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setUsuarios(usuariosArray);
      } else {
        setUsuarios([]);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleToggleEstado = async (userId, newEstado) => {
    const isConfirmed = await showConfirmationMessage({
      title: "Confirmación",
      text: "¿Está seguro de cambiar el estado del usuario?",
      icon: "warning",
    });
    if (!isConfirmed) return;

    const userRef = ref(db, `users/${userId}`);

    try {
      await update(userRef, { estado: newEstado });
      showAlertMessage("Éxito", "Se cambió el estado del usuario", "success");
    } catch (error) {
      console.error("Error al cambiar el estado del usuario:", error.message);
    }
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
          columns={TableColumnsUsuarios({ handleToggleEstado })}
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
