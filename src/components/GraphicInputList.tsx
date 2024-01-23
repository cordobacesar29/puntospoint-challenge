import { Colors } from "@/app/utils/Colors";
import { Box, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Dispatch, SetStateAction } from "react";
import { InputType } from "@/interfaces/input.type";

interface Props {
  setInputSelected: Dispatch<SetStateAction<InputType>>;
  inputSelected: InputType | null;
}
export const GraphicInputList = ({
  inputSelected,
  setInputSelected,
}: Props) => {
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"space-around"}>
      <Box display={"flex"} gap={"12px"}>
        {inputList.map((el) => {
          return (
            <Box
              key={el.value}
              padding={"12px"}
              borderRadius={"8px"}
              bgcolor={
                inputSelected === el.value
                  ? Colors.bg_color_secondary
                  : Colors.bg_color_primary
              }
              onClick={() => setInputSelected(el.value)}
              sx={{ ":hover": { cursor: "pointer" } }}
            >
              <Typography fontSize={"14px"} fontWeight={500}>
                {el.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={"10px"}
        color={Colors.text_violet_primary}
        sx={{ ":hover": { cursor: "pointer" } }}
      >
        <VisibilityIcon />
        <Typography fontSize={"14px"} fontWeight={500}>
          Ver detalle
        </Typography>
      </Box>
    </Box>
  );
};

const inputList = [
  {
    label: "HOY",
    value: InputType.TODAY,
  },
  {
    label: "7D",
    value: InputType.WEEK,
  },
  {
    label: "Este mes",
    value: InputType.THIS_MONTH,
  },
  {
    label: "6M",
    value: InputType.SIX_MONTHS,
  },
  {
    label: "YTD / YTG",
    value: InputType.YEAR_TO_DATE,
  },
  {
    label: "1A",
    value: InputType.ONE_YEAR,
  },
  {
    label: "MÁX",
    value: InputType.MAX,
  },
  {
    label: "Personalizado",
    value: InputType.PERSONALIZED,
  },
];
