import { Controller, useForm } from "react-hook-form";
import { GestionInvernaderoLayout } from "../layout";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { PersonAdd, Visibility, VisibilityOff } from "@mui/icons-material";
import { db } from "../../firebase/firebase";
import { onValue, ref, set, push } from "firebase/database";
import { showAlertMessage, showConfirmationMessage } from "../../helpers";
import { useNavigate } from "react-router-dom";

export const CrearUsuarioPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    clearErrors,
    unregister,
  } = useForm();

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {

    const isConfirmed = await showConfirmationMessage({
      title: "Confirmación",
      text: "¿Está seguro de proceder con la creación del usuario?",
      icon: "warning",
    });
    if (!isConfirmed) return;

    try {
      const usersRef = ref(db, "users/");
      const newUserDataRef = push(usersRef);

      const userData = {
        estado: "Habilitado",
        fecha: new Date().toLocaleDateString(),
        tipo: "Usuario",
        ...data,
      };

      await set(newUserDataRef, userData);

      showAlertMessage("Éxito", "Usuario creado correctamente", "success");
      navigate("/invernadero/usuarios");
    } catch (error) {
      showAlertMessage(
        "Error",
        `Error al crear usuario: ${error.message}`,
        "error"
      );
    }
  };

  /*useEffect(() => {
    const query = ref(db, "test");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  }, []);*/

  return (
    <GestionInvernaderoLayout>
      <Grid
        container
        spacing={2}
        sx={{
          alignItems: "center",
        }}
      >
        <Grid item>
          <PersonAdd />
        </Grid>
        <Grid item>
          <Typography component="h3" variant="span">
            Crear usuario
          </Typography>
        </Grid>
      </Grid>
      <Box
        component="form"
        noValidate
        sx={{
          mt: 1,
          width: "100%",
        }}
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container justifyContent="space-between">
          <Grid item xs={12} md={5.8}>
            <Controller
              defaultValue=""
              name="nombreUsuario"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Ingresa nombre de usuario"
                  margin="normal"
                  fullWidth
                  autoComplete="nombreUsuario"
                  autoFocus
                  error={!!errors.nombreUsuario}
                  helperText={errors?.nombreUsuario?.message}
                />
              )}
              rules={{
                required: "El usuario es requerido",
              }}
            />
          </Grid>
          <Grid item xs={12} md={5.8}>
            <FormControl variant="outlined" fullWidth margin="normal">
              <InputLabel
                htmlFor="outlined-adornment-clave"
                error={!!errors.clave}
              >
                Ingresa la clave
              </InputLabel>
              <OutlinedInput
                defaultValue=""
                id="outlined-adornment-clave"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                error={!!errors.clave}
                label="Ingresa la clave"
                {...register("clave", {
                  required: "La clave es requerida",
                  minLength: {
                    value: 8,
                    message: "La clave debe tener al menos 8 caracteres",
                  },
                })}
              />
              {errors?.clave && (
                <FormHelperText error>{errors?.clave?.message}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} md={5.8}>
            <Controller
              defaultValue=""
              name="nombres"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Ingrese el nombre"
                  margin="normal"
                  fullWidth
                  autoComplete="nombres"
                  error={!!errors.nombres}
                  helperText={errors?.nombres?.message}
                />
              )}
              rules={{
                required: "El nombre es requerido",
                pattern: {
                  value: /^[a-zA-Z\s]*$/,
                  message: "El nombre solo puede contener letras",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={5.8}>
            <Controller
              defaultValue=""
              name="apellidos"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Ingresa los apellidos"
                  margin="normal"
                  fullWidth
                  autoComplete="apellidos"
                  error={!!errors.apellidos}
                  helperText={errors?.apellidos?.message}
                />
              )}
              rules={{
                required: "Los apellidos son requeridos",
                pattern: {
                  value: /^[a-zA-Z\s]*$/,
                  message: "Los apellidos solo pueden contener letras",
                },
              }}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item>
            <Button
              type="submit"
              variant="contained"
              sx={{
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 4,
              }}
              startIcon={<PersonAdd />}
            >
              Crear
            </Button>
          </Grid>
        </Grid>
      </Box>
    </GestionInvernaderoLayout>
  );
};
