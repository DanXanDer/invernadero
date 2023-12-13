import { GestionInvernaderoLayout } from "../layout";
import { Grid, Paper, Typography } from "@mui/material";
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);

const data = {
  labels: ["6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM", "12 AM"],
  datasets: [
    {
      label: "Temperatura Ambiental (°C)",
      data: [18, 20, 22, 24, 20, 18, 16],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

export const DetalleVariablePage = ({ nombreVariable }) => {
  return (
    <GestionInvernaderoLayout>
      <Grid component={Paper} p={1} mb={2} textAlign="center">
        <Typography component="h2" variant="span">
          Temperatura del ambiente
        </Typography>
      </Grid>
      <Grid container gap={2} mb={4} justifyContent="space-between">
        <Grid item component={Paper} p={2} xs={2.5} textAlign="center">
          <Typography component="h5" variant="span">
            Lectura actual: 18°C
          </Typography>
        </Grid>
        <Grid item component={Paper} p={2} xs={2.5} textAlign="center">
          <Typography component="h5" variant="span">
            Lectura mínima: 16°C
          </Typography>
        </Grid>
        <Grid item component={Paper} p={2} xs={2.5} textAlign="center">
          <Typography component="h5" variant="span">
            Lectura máxima: 24°C
          </Typography>
        </Grid>
        <Grid item component={Paper} p={2} xs={2.5} textAlign="center">
          <Typography component="h5" variant="span">
            Rango seguro: 18°C - 24°C
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={10}>
          <Line data={data} width={800} height={400} />
        </Grid>
      </Grid>
    </GestionInvernaderoLayout>
  );
};
