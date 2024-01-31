"use client";
import { useState } from "react";
import { FilterType, InputType } from "@/interfaces/input.type";
import { Box } from "@mui/material";
import { GraphicInputList } from "./GraphicInputList";
import { ChartContainer } from "./ChartContainer";
import { GraphicFilters } from "./GraphicFilters";

export const MainContainer = () => {
  const [inputSelected, setInputSelected] = useState<InputType>(
    InputType.TODAY
  );
  const [filterSelected, setFilterSelected] = useState<FilterType | null>(
    FilterType.CLIENTS
  );
  const [filterCashSelected, setFilterCashSelected] =
    useState<FilterType | null>(null);

  return (
    <Box
      width={{ xs: "100%", md: "75%" }}
      display={"flex"}
      flexDirection={"column"}
      gap={"30px"}
    >
      <GraphicInputList
        inputSelected={inputSelected}
        setInputSelected={setInputSelected}
      />
      <GraphicFilters
        filterCashSelected={filterCashSelected}
        filterSelected={filterSelected}
        setFilterCashSelected={setFilterCashSelected}
        setFilterSelected={setFilterSelected}
      />
      <ChartContainer
        inputValue={inputSelected}
        filterSelected={filterSelected}
        filterCashSelected={filterCashSelected}
      />
    </Box>
  );
};
