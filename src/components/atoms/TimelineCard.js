import React, { useEffect,useState } from 'react';
import { Card } from 'bootstrap-4-react';
import Axios from 'axios';
import Chart from "chart.js";

export const TimelineCard = ({ nombrePais, alpha3Code}) => {

    

    const [chart, setChart] = useState("");

    useEffect(() => {
      if (alpha3Code !== "") {
        Axios.get(
          `https://corona.lmao.ninja/v2/historical/${alpha3Code}?lastdays=30`
        )
          .then((res) => {
            let arregloFechaCasos = Object.keys(res.data.timeline.cases);
            arregloFechaCasos = arregloFechaCasos.map(function (d) {
              let arrayD = d.split("/");
              return arrayD[1] + "/" + arrayD[0] + "/" + arrayD[2];
            });

            let arregloDatosCasos = Object.values(res.data.timeline.cases);
            let arregloDatosMuertes = Object.values(res.data.timeline.deaths);
            let arregloDatosRecuperaciones = Object.values(
              res.data.timeline.recovered
            );

            var config = {
              type: "line",
              data: {
                labels: arregloFechaCasos,
                datasets: [
                  {
                    label: "Casos",
                    backgroundColor: window.chartColors.red,
                    borderColor: window.chartColors.red,
                    fill: false,
                    data: arregloDatosCasos,
                  },
                  {
                    label: "Muertes",
                    backgroundColor: window.chartColors.purple,
                    borderColor: window.chartColors.purple,
                    fill: false,
                    data: arregloDatosMuertes,
                  },
                  {
                    label: "Recuperaciones",
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
                  text: `Linea de tiempo del covid en ${res.data.country}`,
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
            let ctx = document.getElementById("myChart5");
            setChart(new Chart(ctx, config));
          })
          .cath(
            (error) => {
              console.log("error");
            }
          );
      } 
    }, [nombrePais, alpha3Code]);






    return (
        <Card>
            <Card.Body>
                <h5>Linea de tiempo deaaa {nombrePais}</h5>
                <div>
                    <canvas id="myChart5" />
                </div>
            </Card.Body>
        </Card>
    )
}
