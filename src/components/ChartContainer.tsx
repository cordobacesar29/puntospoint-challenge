import { getData } from "@/app/api/dataAPI";
import {
  DAYS,
  FilterType,
  HOURS,
  InputType,
  MONTHS,
  WEEKS,
  YEAR,
  YTD,
} from "@/interfaces/input.type";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { HorizontalBarChart } from "./HorizontalBarChart";
import Loading from "./Loading";

interface Props {
  inputValue: InputType;
  filterSelected: FilterType | null;
  filterCashSelected: FilterType | null;
}
export const ChartContainer = ({
  inputValue,
  filterCashSelected,
  filterSelected,
}: Props) => {
  const { data, isLoading } = useQuery({
    queryKey: [inputValue],
    queryFn: () => getData(inputValue),
  });
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

  if(isLoading) return <Loading/>
  return (
    <Box padding={"0 2rem"} maxHeight={{base:440, xxl: "none"}}>
      <HorizontalBarChart
        labels={labels()}
        clients={
          filterSelected === FilterType.CLIENTS ? data?.clients : undefined
        }
        transactions={
          filterSelected === FilterType.TRANSACTIONS
            ? data?.transactions
            : undefined
        }
        money={
          filterCashSelected === FilterType.MONEY ? data?.money : undefined
        }
        cashback={
          filterCashSelected === FilterType.CASHBACK
            ? data?.cashback
            : undefined
        }
      />
    </Box>
  );
};
