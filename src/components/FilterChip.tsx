import { FilterType } from "@/interfaces/input.type";
import { Box, BoxProps, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

interface Props extends BoxProps {
  label: string;
  value: string;
  bgColor: string;
  onClick: () => void;
  filterCashSelected?: FilterType | null;
  filterSelected?: FilterType;
}
export const FilterChip = ({
  bgColor,
  label,
  onClick,
  value,
  filterCashSelected,
  filterSelected,
}: Props) => {
  return (
    <Box
      border={
        filterCashSelected === value || filterSelected === value
          ? "none"
          : "1px solid #79757F"
      }
      display={"flex"}
      alignItems={"center"}
      gap={"8px"}
      width={"max-content"}
      padding={"12px"}
      borderRadius={"12px"}
      bgcolor={bgColor}
      onClick={onClick}
      sx={{ ":hover": { cursor: "pointer" } }}
    >
      {(filterCashSelected === value || filterSelected === value) && (
        <CheckIcon fontSize="small" />
      )}
      <Typography fontSize={"14px"} fontWeight={500}>
        {label}
      </Typography>
    </Box>
  );
};
