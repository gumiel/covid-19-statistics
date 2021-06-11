import React, { useEffect,useState } from 'react';
import { Card } from 'bootstrap-4-react';
import Axios from 'axios';
import Chart from "chart.js";
import { render } from '@testing-library/react';

const DepartamentoTimelinePorDia = ({dataCocha}) => {

  const [chart, setChart] = useState("");

  useEffect(() => {

    

    let arregloFechaCasos = [];
    arregloFechaCasos = dataCocha.map(function (d) {
      let arrayD = d.fecha.split("-");
      return arrayD[2] + "/" + arrayD[1] + "/" + arrayD[0];
    }).reverse();
    arregloFechaCasos.shift();

    let arregloDatosCasos = [];
    arregloDatosCasos = porDia(dataCocha.map(function (d) {
      return d.activos;
    })).reverse();
    arregloDatosCasos.pop(); // elimina el ultimo registro que es 0

    let arregloDatosMuertes = [];
    arregloDatosMuertes = porDia(dataCocha.map(function (d) {
      return d.decesos;
    })).reverse();
    arregloDatosMuertes.pop(); // elimina el ultimo registro que es 0

    let arregloDatosRecuperaciones = [];
    arregloDatosRecuperaciones = porDia(dataCocha.map(function (d) {
      return d.recuperados;
    })).reverse();
    arregloDatosRecuperaciones.pop(); // elimina el ultimo registro que es 0


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
      let ctx = document.getElementById("myChart002");
      setChart(new Chart(ctx, config));
    }
    
  }, [dataCocha]);

  function porDia(arreglo){
    var anterior = arreglo[0];
    arreglo = arreglo.map(function (d) {
      let res = anterior-d;
      anterior = d;    
      return res;
    })
    
    return arreglo;
  }


  return(
    <>
      <canvas id="myChart002" />
    </>
  );
};

export default DepartamentoTimelinePorDia;