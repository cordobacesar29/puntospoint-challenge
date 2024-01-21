"use client";
import { useState } from "react";
import { getDataByWeek } from "@/app/api/dataAPI";
import { IClient } from "@/interfaces/client.type";
import { InputType } from "@/interfaces/input.type";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { GraphicInputList } from "./GraphicInputList";
import { ChartContainer } from "./ChartContainer";

export const MainContainer = () => {
  const [inputSelected, setInputSelected] = useState<InputType>(
    InputType.TODAY
  );
  return (
    <Box width={"80%"} display={"flex"} flexDirection={"column"} gap={"30px"}>
      <GraphicInputList
        inputSelected={inputSelected}
        setInputSelected={setInputSelected}
      />
      <ChartContainer inputValue={inputSelected} />
    </Box>
  );
};
