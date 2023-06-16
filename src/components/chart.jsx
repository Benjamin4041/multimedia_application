import React from "react";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { Bar,Pie } from "react-chartjs-2";

export default function Chart({imageNum,docNum,vidNum,audioNum}) {
  ChartJs.register(CategoryScale, LinearScale, BarElement, ArcElement,Tooltip,Legend);
 
  const labels = ["videos", "audio", "documents", "pictures"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [vidNum,audioNum,docNum,imageNum],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
    
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",

        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 26,
      },
    },
  };

  return (
    <div style={{backgroundColor:"white",margin:"auto",width:"50%",display:"flex",justifyContent:"center",alignItems:"center",gap:"1rem"}}>
      {/* ggg */}
      <Pie data={data} options={options} height={400} width={500}/>
      <Bar 
      height={400} 
      data={data} 
      options={options} />
      
    </div>
  );
}
