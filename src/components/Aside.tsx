import { Colors } from "@/app/utils/Colors";
import { Box, Card, Collapse, Typography } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import StarHalfSharpIcon from "@mui/icons-material/StarHalfSharp";
import { SwitchChip } from "./SwitchChip";
import { InputType, SwitchType } from "@/interfaces/input.type";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import { PulseCard } from "./PulseCard";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/app/api/dataAPI";

interface Props {
  switchMode: SwitchType;
  setSwitchMode: React.Dispatch<React.SetStateAction<SwitchType>>;
}
export const Aside = ({ switchMode, setSwitchMode }: Props) => {
  const [showPulses, setShowPulses] = useState<boolean>(true);
  const { data, error, isLoading } = useQuery({
    queryKey: ["pulse"],
    queryFn: () => getData("pulse" as InputType),
  });
  return (
    <Box width={"25%"} display={"flex"} flexDirection={"column"} gap={"32px"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        height={"max-content"}
        alignItems={"center"}
      >
        <Box
          border={`2px solid ${Colors.text_violet_primary}`}
          borderRadius={"50px"}
          padding={"4px 6px"}
          width={"max-content"}
          display={"flex"}
          gap={"16px"}
          sx={{ ":hover": { cursor: "pointer" } }}
        >
          <SwitchChip
            label="Gráfico"
            onClick={() => setSwitchMode(SwitchType.GRAPHIC)}
            icon={<BarChartIcon />}
            switchMode={switchMode}
          />
          <SwitchChip
            label="Pulso"
            onClick={() => setSwitchMode(SwitchType.PULSE)}
            icon={<StarHalfSharpIcon />}
            switchMode={switchMode}
          />
        </Box>
        <Box
          alignItems={"center"}
          sx={{ ":hover": { cursor: "pointer" } }}
          onClick={() => setShowPulses(!showPulses)}
        >
          {showPulses ? (
            <ExpandLessIcon fontSize="large" />
          ) : (
            <ExpandMoreIcon fontSize="large" />
          )}
        </Box>
      </Box>
      {data && (
        <Collapse in={showPulses} timeout="auto" unmountOnExit>
          <PulseCard data={data.Diciembre} isLoading={isLoading}/>
          <PulseCard data={data.Noviembre} isLoading={isLoading}/>
          <PulseCard data={data.Octubre} isLoading={isLoading}/>
        </Collapse>
      )}
    </Box>
  );
};
