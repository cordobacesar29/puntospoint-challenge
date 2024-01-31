"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { ROUTES } from "./utils/routes";

export default function HomePage() {
  const router = useRouter();
  const { data: session } = useSession();

  if(session) return router.push(ROUTES.DASHBOARD)

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p>Bienvenidos a mi proyecto. 👨‍💻</p>
      <Button onClick={()=>signIn()}>Sign In</Button>
    </div>
  );
}
