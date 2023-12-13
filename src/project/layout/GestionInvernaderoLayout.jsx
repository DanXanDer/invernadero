import { Box, Paper, Toolbar } from "@mui/material";
import { NavBar, SideBar } from "../components";
import { useState } from "react";

const drawerWidth = 240;

export const GestionInvernaderoLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <NavBar
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <SideBar
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box
          component={Paper}
          sx={{
            height: "100%",
            width: "100%",
            backgroundColor: "white",
            padding: 2,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
