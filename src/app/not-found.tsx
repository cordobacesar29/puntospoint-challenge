import { Box, Typography } from "@mui/material";
import Image from "next/image";
import notfound from "@/assets/svgs/404DesktopSvg.svg";

export default function NotFount() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      height={"100vh"}
      gap={4}
      justifyContent={'center'}
    >
      <Image alt="" src={notfound} width={400} height={400} />
      <Typography>404 Error</Typography>
      <Typography>
        We are sorry, but the page you requested could not be found
      </Typography>
    </Box>
  );
}
