"use client";
import { useMemo } from "react";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { ROUTES } from "./utils/routes";
import { SessionStateType } from "@/interfaces/session.state.type";
import Loading from "@/components/Loading";

export default function HomePage() {
  const router = useRouter();
  const { status } = useSession();

  const renderMemo = useMemo(() => {
    if (status === SessionStateType.LOADING) return <Loading />;

    if (status === SessionStateType.AUTHENTICATED) {
      return router.push(ROUTES.DASHBOARD);
    }

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
        <Button onClick={() => signIn()}>Sign In</Button>
      </div>
    );
  }, [status]);

  return renderMemo;
}
