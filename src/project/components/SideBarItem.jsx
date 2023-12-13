import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { CustomIcon } from "./CustomIcon";
import { useNavigate } from "react-router-dom";

export const SideBarItem = ({ item }) => {
  const navigate = useNavigate();

  const handleClickSideBarItem = () => {
    navigate(`${item.path}`);
  };

  return (
    <ListItem key={item.id} disablePadding>
      <ListItemButton onClick={handleClickSideBarItem}>
        <ListItemIcon>
          <CustomIcon icon={item.icon} />
        </ListItemIcon>
        <ListItemText primary={item.name} />
      </ListItemButton>
    </ListItem>
  );
};
