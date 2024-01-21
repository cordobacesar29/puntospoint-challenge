import {
  getDataByWeek,
  getDataByOneYear,
  getDataBySixMont,
  getDataByYTD,
  getDataMax,
  getDataPersonalized,
  getDataToday,
  getDataByThisMonth,
} from "@/app/api/dataAPI";
import { IClient } from "@/interfaces/client.type";
import { DAYS, HOURS, InputType, MONTHS, WEEKS, YEAR, YTD } from "@/interfaces/input.type";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { HorizontalBarChart } from "./HorizontalBarChart";

interface Props {
  inputValue: InputType;
}
export const ChartContainer = ({ inputValue }: Props) => {
  const labels = () => {
    switch (inputValue) {
      case InputType.TODAY:
        return HOURS;
      case InputType.WEEK:
        return DAYS;
      case InputType.THIS_MONTH:
        return WEEKS;
      case InputType.SIX_MONTHS:
        return MONTHS;
      case InputType.YEAR_TO_DATE:
        return YTD;
      case InputType.ONE_YEAR:
        return YEAR;
      default:
        return HOURS;
    }
  };
  const { data, error, isLoading } = useQuery({
    queryKey: [inputValue],
    queryFn: () => {
      switch (inputValue) {
        case InputType.TODAY:
          return getDataToday();
        case InputType.WEEK:
          return getDataByWeek();
        case InputType.THIS_MONTH:
          return getDataByThisMonth();
        case InputType.SIX_MONTHS:
          return getDataBySixMont();
        case InputType.YEAR_TO_DATE:
          return getDataByYTD();
        case InputType.ONE_YEAR:
          return getDataByOneYear();
        case InputType.MAX:
          return getDataMax();
        case InputType.PERSONALIZED:
          return getDataPersonalized();
        default:
          return getDataToday();
      }
    },
  });
  console.log(data?.clients);
  return (
    <Box padding={"2rem"}>
      <HorizontalBarChart labels={labels()} clients={data?.clients} />
    </Box>
  );
};
