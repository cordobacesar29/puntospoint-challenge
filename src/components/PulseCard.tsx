import { Card, Typography, Box } from "@mui/material";
import Loading from "./Loading";

interface Props {
  data: any;
  isLoading: boolean
}
export const PulseCard = ({ data, isLoading }: Props) => {
  if(isLoading) return <Loading/>
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "1rem",
      }}
    >
      <Typography fontWeight={500} textAlign={"center"}></Typography>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography fontSize={14}>Clientes</Typography>
        <Typography fontSize={14}>{data[0]?.clients}</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography fontSize={14}>Ventas totales</Typography>
        <Typography fontSize={14}>{data[0]?.sells}</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography fontSize={14}>Monto total</Typography>
        <Typography fontSize={14}>${data[0]?.total_money}</Typography>
      </Box>
      <Typography fontWeight={600}>Cashback</Typography>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography fontSize={14}>Acumulado</Typography>
        <Typography fontSize={14}>${data[0]?.cashback_accumulated}</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography fontSize={14}>Facturado 01</Typography>
        <Typography fontSize={14}>${data[0]?.cashback_01}</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography fontSize={14}>Facturado 10/11</Typography>
        <Typography fontSize={14}>${data[0]?.cashback_10}</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography fontSize={14}>Facturado 20/11</Typography>
        <Typography fontSize={14}>${data[0]?.cashback_20}</Typography>
      </Box>
    </Card>
  );
};
