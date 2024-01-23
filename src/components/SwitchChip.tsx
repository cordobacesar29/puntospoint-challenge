import { Colors } from "@/app/utils/Colors";
import { SwitchType } from "@/interfaces/input.type";
import { Box, Typography } from "@mui/material";

interface Props {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  switchMode: SwitchType;
}
export const SwitchChip = ({ icon, label, onClick, switchMode }: Props) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      gap={"4px"}
      padding={"5px"}
      onClick={onClick}
      width={"max-content"}
      borderRadius={'50px'}
      bgcolor={
        switchMode === label
          ? Colors.text_violet_primary
          : Colors.bg_color_primary
      }
      color={
        switchMode === label
          ? Colors.bg_color_primary
          : Colors.text_violet_primary
      }
    >
      {icon}
      <Typography fontSize={14} fontWeight={500}>
        {label}
      </Typography>
    </Box>
  );
};
