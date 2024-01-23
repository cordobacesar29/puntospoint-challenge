import { Dispatch, SetStateAction } from "react";
import { Colors } from "@/app/utils/Colors";
import { FilterType, filters } from "@/interfaces/input.type";
import { Box } from "@mui/material";
import { FilterChip } from "./FilterChip";

interface Props {
  filterSelected?: FilterType | null;
  filterCashSelected?: FilterType | null;
  setFilterSelected?: Dispatch<SetStateAction<FilterType | null>>;
  setFilterCashSelected?: Dispatch<SetStateAction<FilterType | null>>;
}
export const GraphicFilters = ({
  filterCashSelected,
  filterSelected,
  setFilterCashSelected,
  setFilterSelected,
}: Props) => {
  return (
    <Box display={"flex"} padding={"0 2rem"} justifyContent={"space-between"}>
      <Box display={"flex"} gap={"12px"}>
        <FilterChip
          bgColor={
            filterSelected === filters[0].value
              ? Colors.bg_color_secondary
              : Colors.bg_color_primary
          }
          label={filters[0].label}
          value={filters[0].value}
          onClick={() =>
            setFilterSelected?.(filters[0].value)
          }
          filterCashSelected={filterSelected}
        />
        <FilterChip
          bgColor={
            filterSelected === filters[1].value
              ? Colors.bg_color_secondary
              : Colors.bg_color_primary
          }
          label={filters[1].label}
          value={filters[1].value}
          onClick={() =>
            setFilterSelected?.(filters[1].value)
          }
          filterCashSelected={filterSelected}
        />
      </Box>
      <Box display={"flex"} gap={"12px"}>
        <FilterChip
          bgColor={
            filterCashSelected === filters[2].value
              ? Colors.bg_color_secondary
              : Colors.bg_color_primary
          }
          label={filters[2].label}
          value={filters[2].value}
          onClick={() =>
            setFilterCashSelected?.(
              filterCashSelected === filters[2].value ? null : filters[2].value
            )
          }
          filterCashSelected={filterCashSelected}
        />
        <FilterChip
          bgColor={
            filterCashSelected === filters[3].value
              ? Colors.bg_color_secondary
              : Colors.bg_color_primary
          }
          label={filters[3].label}
          value={filters[3].value}
          onClick={() =>
            setFilterCashSelected?.(
              filterCashSelected === filters[3].value ? null : filters[3].value
            )
          }
          filterCashSelected={filterCashSelected}
        />
      </Box>
    </Box>
  );
};
