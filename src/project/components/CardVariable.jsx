import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export const CardVariable = ({
  id,
  nombre,
  descripcion,
  pathImage,
  handleCardClick,
  nombreValue,
}) => {
  return (
    <Grid item key={id} xs={12} md={6}>
      <Card
        raised
        sx={{
          height: "100%",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={pathImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {descripcion}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => handleCardClick(nombreValue, nombre)}
          >
            Ver actividad
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
