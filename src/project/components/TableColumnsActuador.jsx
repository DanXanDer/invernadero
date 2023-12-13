const columnOptions = {
  headerAlign: "left",
  width: 320,
  align: "left",
};

export const TableColumnsActuador = () => {
  const columns = [
    { field: "numero_actividad", headerName: "N° Actividad", ...columnOptions },
    { field: "descripcion", headerName: "Descripcion", ...columnOptions },
    { field: "estado", headerName: "Estado", ...columnOptions },
    { field: "fecha", headerName: "Fecha", ...columnOptions },
  ];

  return columns;
};
