import { List } from "@mui/material";
import { SideBarItem } from "./SideBarItem";

const sideBarItems = [
  {
    id: 1,
    name: "Monitoreo de Invernadero",
    icon: "monitoring",
    path: "/invernadero/monitoreo",
  },
  {
    id: 2,
    name: "Actuadores",
    icon: "manufacturing",
    path: "/invernadero/actuadores",
  },
  {
    id: 3,
    name: "Sensores",
    icon: "sensors",
    path: "/invernadero/sensores",
  },
  {
    id: 4,
    name: "Gestionar usuarios",
    icon: "manage_accounts",
    path: "/invernadero/usuarios",
  },
];

export const SideBarList = () => {
  return (
    <List>
      {sideBarItems.map((item) => (
        <SideBarItem key={item.id} item={item} />
      ))}
    </List>
  );
};
