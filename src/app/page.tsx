import Link from "next/link";
import React from "react";
import { ROUTES } from "./utils/routes";

export default function HomePage() {
  return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <p>Bienvenidos a mi proyecto. 👨‍💻</p>
        <Link href={ROUTES.DASHBOARD}>
          Ir al dashboard
        </Link>
      </div>
  );
}
