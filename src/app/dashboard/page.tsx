"use client";
import React, { lazy, useState } from "react";
import { Box } from "@mui/material";
import { SwitchType } from "@/interfaces/input.type";

export default function Dashboard() {
  const [switchMode, setSwitchMode] =useState<SwitchType>(SwitchType.GRAPHIC)

  return (
    <Box display={'flex'} padding={'2rem'} gap={'25px'}>
      <MainContainer />
      <Aside switchMode={switchMode} setSwitchMode={setSwitchMode}/>
    </Box>
  );
}

const MainContainer = lazy(() =>
  import("../../components/MainContainer").then((el) => ({
    default: el.MainContainer,
  }))
);
const Aside = lazy(() =>
  import("../../components/Aside").then((el) => ({
    default: el.Aside,
  }))
);