"use client";
import { useState } from "react";
import {
  List,
  Box,
  ListItemButton,
  ListItemText,
  Collapse,
  ListItemIcon,
  Avatar,
} from "@mui/material";
import Link from "next/link";
import { Colors } from "@/app/utils/Colors";
import { usePathname } from "next/navigation";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import { ROUTES } from "@/app/utils/routes";
import { useSession, signOut } from "next-auth/react";

export const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box display={"flex"} alignItems={"center"}>
      <Box
        display={{ base: "none", md: "flex" }}
        gap={"25px"}
        justifyContent={"center"}
        width={"80%"}
      >
        {links.map((el) => {
          return (
            <Link
              key={el.name}
              href={el.href}
              style={{
                textDecoration: "none",
                color:
                  pathname === el.href
                    ? Colors.bg_color_primary
                    : Colors.text_violet_primary,
                fontWeight: 500,
                fontSize: "14px",
                background:
                  pathname === el.href
                    ? Colors.text_violet_primary
                    : Colors.bg_color_primary,
                padding: "10px 24px",
                borderRadius: "24px",
              }}
            >
              {el.name}
            </Link>
          );
        })}
      </Box>
      <Box>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          sx={{ width: "max-content", minWidth: "320px" }}
        >
          {session?.user?.image && (
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <Avatar src={session?.user?.image} alt="avatar" />
              </ListItemIcon>
              <ListItemText primary={session?.user?.name} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          )}
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List
              component="div"
              style={{
                position: "absolute",
                backgroundColor: Colors.bg_color_primary,
                width: "max-content",
                minWidth: "320px",
              }}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Editar perfil" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => signOut({ callbackUrl: ROUTES.HOME })}
              >
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Cerrar sesión" />
              </ListItemButton>
              <Box
                display={{ base: "flex", md: "none" }}
                flexDirection={"column"}
              >
                {links.map((el) => {
                  return (
                    <ListItemButton sx={{ pl: 4 }} key={el.name}>
                      <Link style={{ textDecoration: "none" }} href={el.href}>
                        <ListItemText primary={el.name} />
                      </Link>
                    </ListItemButton>
                  );
                })}
              </Box>
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
    href: ROUTES.DASHBOARD,
  },
  {
    name: "Clientes",
    href: "/dashboard/clients",
  },
  {
    name: "Reglas de acumulación",
    href: "/dashboard/accumulation-rules",
  },
];
