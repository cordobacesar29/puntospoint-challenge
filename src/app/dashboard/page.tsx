"use client";
import React, { lazy } from "react";
import { Box } from "@mui/material";

export default function Dashboard() {
  return (
    <Box sx={{ display: "flex", padding: "2rem" }}>
      <MainContainer />
      <Box sx={{ width: "20%" }}>asds dasd</Box>
    </Box>
  );
}

const MainContainer = lazy(() =>
  import("../../components/MainContainer").then((el) => ({
    default: el.MainContainer,
  }))
);
