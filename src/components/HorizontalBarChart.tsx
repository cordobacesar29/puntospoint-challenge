import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import {} from "react-chartjs-2";
import { Chart } from "react-chartjs-2";
import { IClient } from "@/interfaces/client.type";
import { ITransaction } from "@/interfaces/transaction.type";
import { IMoney } from "@/interfaces/money.type";
import { ICashback } from "@/interfaces/cashback.type";

interface Props {
  labels: string[];
  clients?: IClient[];
  transactions?: ITransaction[];
  money?: IMoney[];
  cashback?: ICashback[];
}

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

export const HorizontalBarChart = ({
  labels,
  clients,
  transactions,
  cashback,
  money,
}: Props) => {
  const clientSells = clients?.map((el: IClient) => el.sells);
  const new_clients = clients?.map((el: IClient) => el.new_clients);
  const transactionsArr = transactions?.map(
    (el: ITransaction) => el.transactions
  );
  const totalSells = money?.map((el: IMoney) => el.sells);
  const totalMoney = money?.map((el: IMoney) => el.total_money);
  const cashbackGenerated = cashback?.map((el: ICashback) => el.generated);
  const cashbackAccumulated = cashback?.map((el: ICashback) => el.accumulated);
  const cashbackTotal = cashback?.map((el: ICashback) => el.total);

  const options = {
    responsive: true,  
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        type: 'linear' as const,
        position: 'left' as const,
        grid: {
          display: true,
        },
      },
      y1: {
        display: (money || cashback) ? true : false,
        type: 'linear' as const,
        position: 'right' as const,
        grid: {
          display: false,
        },
      },
    },
  };
  
  const clientsDatasets = [
    {
      type: "bar" as const,
      label: "Clientes nuevos",
      data: new_clients,
      backgroundColor: "rgba(235, 118, 53, 1)",
      yAxisID: 'y',
    },
    {
      type: "bar" as const,
      label: "Compraron",
      data: clientSells,
      backgroundColor: "rgba(53, 141, 235, 1)",
      yAxisID: 'y',
    },
  ];

  const clientsAndMoneyDatasets = [
    {
      type: "line" as const,
      label: "Dinero total",
      borderColor: "#EB3535",
      backgroundColor: "#EB3535",
      borderWidth: 2,
      data: totalMoney,
      yAxisID: 'y1',
    },
    {
      type: "line" as const,
      label: "Ventas",
      borderColor: "#7A35EB",
      borderWidth: 2,
      data: totalSells,
      backgroundColor: "#7A35EB",
      yAxisID: 'y1',
    },
    {
      type: "bar" as const,
      label: "Clientes nuevos",
      data: new_clients,
      backgroundColor: "#2DCF5A",
      yAxisID: 'y',
    },
    {
      type: "bar" as const,
      label: "Compraron",
      data: clientSells,
      backgroundColor: "#358DEB",
      yAxisID: 'y',

    },
  ];

  const clientsAndCashbackDatasets = [
    {
      type: "line" as const,
      label: "Cashback generado",
      data: cashbackGenerated,
      backgroundColor: "#EB3535",
      borderColor: "#EB3535",
      yAxisID: 'y1',
    },
    {
      type: "line" as const,
      label: "Cashback acumulado",
      data: cashbackAccumulated,
      backgroundColor: "#7A35EB",
      borderColor: "#7A35EB",
      yAxisID: 'y1',
    },
    {
      type: "line" as const,
      label: "Cashback total",
      data: cashbackTotal,
      backgroundColor: "#EB35AD",
      borderColor: "#EB35AD",
      yAxisID: 'y1',
    },
    {
      type: "bar" as const,
      label: "Clientes nuevos",
      data: new_clients,
      backgroundColor: "#2DCF5A",
      yAxisID: 'y',
    },
    {
      type: "bar" as const,
      label: "Compraron",
      data: clientSells,
      backgroundColor: "#358DEB",
      yAxisID: 'y',
    },
  ];

  const transactionsDatasets = [
    {
      label: "Transacciones",
      data: transactionsArr,
      backgroundColor: "rgba(53, 141, 235, 1)",
      yAxisID: 'y',
    },
  ];

  const transactionsAndCashbackDatasets = [
    {
      type: "line" as const,
      label: "Cashback generado",
      data: cashbackGenerated,
      backgroundColor: "#EB3535",
      borderColor:"#EB3535",
      yAxisID: 'y1',
    },
    {
      type: "line" as const,
      label: "Cashback acumulado",
      data: cashbackAccumulated,
      backgroundColor: "#7A35EB",
      borderColor: "#7A35EB",
      yAxisID: 'y1',
    },
    {
      type: "line" as const,
      label: "Cashback total",
      data: cashbackTotal,
      backgroundColor: "#EB35AD",
      borderColor: "#EB35AD",
      yAxisID: 'y1',
    },
    {
      type: "bar" as const,
      label: "Transacciones",
      data: transactionsArr,
      backgroundColor: "rgba(53, 141, 235, 1)",
      yAxisID: 'y',
    },
  ];
  const transactionsAndMoneyDatasets = [
    {
      type: "line" as const,
      label: "Dinero total",
      data: totalMoney,
      backgroundColor: "#EB3535",
      borderColor: "#EB3535",
      yAxisID: 'y1',

    },
    {
      type: "line" as const,
      label: "Ventas",
      data: totalSells,
      backgroundColor: "#7A35EB",
      borderColor: "#7A35EB",
      yAxisID: 'y1',

    },
    {
      label: "Transacciones",
      data: transactionsArr,
      backgroundColor: "rgba(53, 141, 235, 1)",
      yAxisID: 'y',
    },
  ];
  
  const handleDatasets = () => {
    if(clients && money) return clientsAndMoneyDatasets
    else if(clients && cashback) return clientsAndCashbackDatasets
    else if(transactions && money) return transactionsAndMoneyDatasets
    else if(transactions && cashback) return transactionsAndCashbackDatasets
    else if(clients) return clientsDatasets
    else if(transactions) return transactionsDatasets
    return []
  }

  const data = {
    labels,
    datasets: handleDatasets(),
  };

  return <Chart type="bar" options={options} data={data}/>;
};