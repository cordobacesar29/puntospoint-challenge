import ConstructionIcon from "@mui/icons-material/Construction";
import { Box, Typography } from "@mui/material";

export const UnderConstruction = () => {
  return (
    <Box
      height={"80vh"}
      alignItems={"center"}
      display={"flex"}
      justifyContent={"center"}
      gap={'8px'}
    >
      <ConstructionIcon color={'secondary'}/>
      <Typography>
        ¡Muy pronto! Esta sección se encuentra actualmente en construcción.
      </Typography>
    </Box>
  )
}