import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Logout, Menu } from "@mui/icons-material";

export const NavBar = ({ drawerWidth, handleDrawerToggle }) => {
  
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Bienvenido! Daniel Alexander
        </Typography>
        <IconButton
          sx={{
            color: "white",
          }}
        >
          <Logout />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
