"use client";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@mui/material";
import { SessionStateType } from "@/interfaces/session.state.type";
import Loading from "@/components/Loading";

export default function HomePage() {
  const { status } = useSession();

  const renderContent = () => {
    if ((status as SessionStateType) === SessionStateType.LOADING) {
      return <Loading />;
    }
    return (
      <>
        <p>Bienvenidos a mi proyecto. 👨‍💻</p>
        <Button
          onClick={() => signIn(undefined, { callbackUrl: "/dashboard" })}
        >
          Sign In
        </Button>
      </>
    );
  };
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
      {renderContent()}
    </div>
  );
}
