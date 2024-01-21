import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { IClient } from "@/interfaces/client.type";
import { ITransaction } from "@/interfaces/transaction.type";

interface Props {
	labels: string[]
	clients?: IClient[]
  transactions?:ITransaction[]
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const HorizontalBarChart = ({labels, clients}:Props) => {
  console.log(clients)
  const sells = clients?.map((el:IClient)=> el.sells)
  const new_clients = clients?.map((el:IClient)=>el.new_clients)
  const data = {
    labels,
    datasets: [
      {
        label: "Clientes nuevos", 
        data: sells,
        backgroundColor: "rgba(235, 118, 53, 1)",
      },
      {
        label: "Compraron",
        data: new_clients,
        backgroundColor: "rgba(53, 141, 235, 1)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export const options = {
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
	},
};


