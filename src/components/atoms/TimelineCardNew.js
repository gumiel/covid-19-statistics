import React, { useEffect, useState } from "react";
import { Card } from "bootstrap-4-react";
import Axios from "axios";
import Chart from "chart.js";

export const TimelineCardNew = ({nombrePais='',alpha3Code}) => {

    let lienzo = null;
  

    const [CanvaTimeline, cambiarCanvaTimeline] = useState({
      type: "line",
      data: {
        labels: [""],
        datasets: [
          {
            label: "Casos",
            backgroundColor: window.chartColors.red,
            borderColor: window.chartColors.red,
            fill: false,
            data: [0],
          },
          {
            label: "Muertes",
            backgroundColor: window.chartColors.purple,
            borderColor: window.chartColors.purple,
            fill: false,
            data: [0],
          },
          {
            label: "Recuperaciones",
            backgroundColor: window.chartColors.green,
            borderColor: window.chartColors.green,
            fill: false,
            data: [0],
          },
        ],
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: `Linea de tiempo del covid en bolivia`,
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
    });

    const [chart, setChart] = useState("");

    useEffect(()=>{
        console.log('primero')
        let canvas = document.getElementById("myChart5"); 
        setChart(new Chart(canvas, CanvaTimeline));
    }, []);

    useEffect(() => {
        console.log("uno");
        let canvas = document.getElementById("myChart5");
        
        
        if(alpha3Code){
            
            if(chart.hasOwnProperty('destroy')){
                chart.destroy();
            }

            Axios.get(`https://corona.lmao.ninja/v2/historical/${alpha3Code}?lastdays=30`).then((res) => {
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
                        },
                        ],
                    },
                    },
                };
                cambiarCanvaTimeline(config);
            });

            setChart(new Chart(canvas, CanvaTimeline));
        }



        

    }, [nombrePais]);

    



    

    // useEffect(() => {
    //   console.log("UNO");  
    //   Axios.get(`https://corona.lmao.ninja/v2/historical/BOL?lastdays=30`).then((res) => {

        // let arregloFechaCasos = Object.keys(res.data.timeline.cases);
        // arregloFechaCasos = arregloFechaCasos.map(function (d) {
        //   let arrayD = d.split("/");
        //   return arrayD[1] + "/" + arrayD[0] + "/" + arrayD[2];
        // });

    //     let arregloDatosCasos = Object.values(res.data.timeline.cases);
    //     let arregloDatosMuertes = Object.values(res.data.timeline.deaths);
    //     let arregloDatosRecuperaciones = Object.values(
    //       res.data.timeline.recovered
    //     );

    //     var config = {
    //       type: "line",
    //       data: {
    //         labels: arregloFechaCasos,
    //         datasets: [
    //           {
    //             label: "Casos",
    //             backgroundColor: window.chartColors.red,
    //             borderColor: window.chartColors.red,
    //             fill: false,
    //             data: arregloDatosCasos,
    //           },
    //           {
    //             label: "Muertes",
    //             backgroundColor: window.chartColors.purple,
    //             borderColor: window.chartColors.purple,
    //             fill: false,
    //             data: arregloDatosMuertes,
    //           },
    //           {
    //             label: "Recuperaciones",
    //             backgroundColor: window.chartColors.green,
    //             borderColor: window.chartColors.green,
    //             fill: false,
    //             data: arregloDatosRecuperaciones,
    //           },
    //         ],
    //       },
    //       options: {
    //         responsive: true,
    //         title: {
    //           display: true,
    //           text: `Linea de tiempo del covid en ${res.data.country}`,
    //         },
    //         scales: {
    //           xAxes: [
    //             {
    //               display: true,
    //             },
    //           ],
    //           yAxes: [
    //             {
    //               display: true,
    //             },
    //           ],
    //         },
    //       },
    //     };

    //     cambiarCanvaTimeline(config);
    //     setCampo(document.getElementById("myChart5"));
        
    //   });

    // });




  

  return (
    <Card>
      <Card.Body>
        <div>
          <canvas id="myChart5" />
        </div>
      </Card.Body>
    </Card>
  );
};
