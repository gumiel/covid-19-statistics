import React, { useState, useEffect } from 'react';
import { Card } from 'bootstrap-4-react';
import Axios from 'axios';
import Chart from "chart.js";

export const TimelineCard = ({ nombrePais, alpha3Code}) => {

    let ctx = document.getElementById("myChart5");
    let chart = null;

    const [dataTimeline, setDataTimeline] = useState({
        "country": "",
        "provinces": [],
        "timeline": {
            "cases": {
            },
            "deaths": {
            },
            "recovered": {
            }
        }
    });


    useEffect(() => {

        if (alpha3Code!==''){

            // alert(alpha3Code);
        
            Axios.get(`https://corona.lmao.ninja/v2/historical/${alpha3Code}?lastdays=30`).then(res => {




                


                let arregloFechaCasos = Object.keys(res.data.timeline.cases);
                arregloFechaCasos = arregloFechaCasos.map(function (d) {
                    let arrayD = d.split('/');
                    return arrayD[1] + '/' + arrayD[0] + '/' + arrayD[2];
                });


                let arregloDatosCasos = Object.values(res.data.timeline.cases);
                let arregloDatosMuertes = Object.values(res.data.timeline.deaths);
                let arregloDatosRecuperaciones = Object.values(res.data.timeline.recovered);

                

                var config = {
                    type: 'line',
                    data: {
                        labels: arregloFechaCasos,
                        datasets: [
                            {
                                label: 'Casos',
                                backgroundColor: window.chartColors.red,
                                borderColor: window.chartColors.red,
                                fill: false,
                                data: arregloDatosCasos,
                            },
                            {
                                label: 'Muertes',
                                backgroundColor: window.chartColors.purple,
                                borderColor: window.chartColors.purple,
                                fill: false,
                                data: arregloDatosMuertes,
                            },
                            {
                                label: 'Recuperaciones',
                                backgroundColor: window.chartColors.green,
                                borderColor: window.chartColors.green,
                                fill: false,
                                data: arregloDatosRecuperaciones,
                            },
                        ]
                    },
                    options: {
                        responsive: true,
                        title: {
                            display: true,
                            text: `Linea de tiempo del covid en ${res.data.country}`
                        },
                        scales: {
                            xAxes: [{
                                display: true,
                            }],
                            yAxes: [{
                                display: true,
                                // type: 'logarithmic',
                            }]
                        }
                    }
                };

                
                
                chart = new Chart(ctx, config);


            }).catch(error => {
                console.log(error.response)
            });
            
        }else if(nombrePais==''){

        }

    });






    return (
        <Card>
            <Card.Body>
                <h5>Linea de tiempo de <b>{nombrePais}</b></h5>
                <div>
                    <canvas id="myChart5" />
                </div>
            </Card.Body>
        </Card>
    )
}
