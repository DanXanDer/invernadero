const columnOptions = {
  headerAlign: "left",
  width: 320,
  align: "left",
};

export const TableColumnsSensor = () => {
  const columns = [
    { field: "temperatura", headerName: "Temperatura", ...columnOptions },
    { field: "humedad", headerName: "Humedad", ...columnOptions },
    { field: "timestamp", headerName: "Fecha", ...columnOptions },
    { field: "estado", headerName: "Estado", ...columnOptions },
  ];

  return columns;
};
