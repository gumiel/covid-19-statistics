import React, { useEffect,useState } from 'react';
import { Card } from 'bootstrap-4-react';
import Axios from 'axios';
import Chart from "chart.js";
import { render } from '@testing-library/react';

const DepartamentoTimeline = ({dataCocha}) => {

  const [chart, setChart] = useState("");

  useEffect(() => {

    let arregloFechaCasos = [];
    arregloFechaCasos = dataCocha.map(function (d) {
      let arrayD = d.fecha.split("-");
      return arrayD[2] + "/" + arrayD[1] + "/" + arrayD[0];
    }).reverse();

    let arregloDatosCasos = [];
    arregloDatosCasos = dataCocha.map(function (d) {
      return d.activos;
    }).reverse();

    let arregloDatosMuertes = [];
    arregloDatosMuertes = dataCocha.map(function (d) {
      return d.decesos;
    }).reverse();

    let arregloDatosRecuperaciones = [];
    arregloDatosRecuperaciones = dataCocha.map(function (d) {
      return d.recuperados;
    }).reverse();


    console.log(arregloFechaCasos.length);
    if(arregloFechaCasos.length>0){

      var config = {
        type: "line",
        data: {
          labels: arregloFechaCasos,
          datasets: [
            {
              label: "Activos",
              backgroundColor: window.chartColors.red,
              borderColor: window.chartColors.red,
              fill: false,
              data: arregloDatosCasos,
            },
            {
              label: "Decesos",
              backgroundColor: window.chartColors.purple,
              borderColor: window.chartColors.purple,
              fill: false,
              data: arregloDatosMuertes,
            },
            {
              label: "Recuperados",
              backgroundColor: window.chartColors.green,
              borderColor: window.chartColors.green,
              fill: false,
              data: arregloDatosRecuperaciones,
            },
          ],
        },
        options: {
          responsive: true,
          title: {
            display: true,
            // text: `Linea de tiempo del covid en ${res.data.country}`,
            text: `Linea de tiempo del covid en 0`,
          },
          scales: {
            xAxes: [
              {
                display: true,
              },
            ],
            yAxes: [
              {
                display: true,
                // type: 'logarithmic',
              },
            ],
          },
        },
      };

      if (chart.hasOwnProperty("destroy")) {
        chart.destroy();
      }
      let ctx = document.getElementById("myChart001");
      setChart(new Chart(ctx, config));
    }
    
  }, [dataCocha]);




  return(
    <>
      <canvas id="myChart001" />
    </>
  );
};

export default DepartamentoTimeline;