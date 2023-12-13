import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { muiTheme } from "./muiTheme";

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
