"use client";
import { useState } from "react";
import {
  Container,
  List,
  Box,
  ListItemButton,
  ListItemText,
  Collapse,
  ListItemIcon,
} from "@mui/material";
import Link from "next/link";
import { Colors } from "@/app/utils/Colors";
import { usePathname } from "next/navigation";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";

export const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          display: "flex",
          gap: "25px",
          justifyContent: "center",
          width: "80%",
        }}
      >
        {links.map((el) => {
          return (
            <Link
              href={el.href}
              style={{
                textDecoration: "none",
                color:
                  pathname === el.href ? "white" : Colors.text_violet_primary,
                fontWeight: 500,
                fontSize: "14px",
                background:
                  pathname === el.href ? Colors.text_violet_primary : "white",
                padding: "10px 24px",
                borderRadius: "24px",
              }}
            >
              {el.name}
            </Link>
          );
        })}
      </Box>
      <Box sx={{width:'20%'}}>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton style={{ padding: "none" }} onClick={handleClick}>
            <ListItemText
              style={{ padding: "none" }}
              primary="Name"
            />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" style={{position: 'absolute'}}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Editar perfil" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Cerrar sesión" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Box>
    </Box>
  );
};

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Clientes",
    href: "/dashboard/clients",
  },
  {
    name: "Reglas de acumulación",
    href: "dashboard/accumulation-rules",
  },
];
