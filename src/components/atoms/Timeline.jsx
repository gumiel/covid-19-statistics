import React, { useEffect } from 'react';
import { Row, Col, Card } from 'bootstrap-4-react';
import Axios from 'axios';
import Chart from "chart.js";

const Timeline = function(){

    useEffect(()=>{  

        Axios.get("https://corona.lmao.ninja/v2/historical/BOL?lastdays=30").then(res=>{ 


            let arregloFechaCasos = Object.keys(res.data.timeline.cases);
            arregloFechaCasos = arregloFechaCasos.map(function(d) {
                let arrayD = d.split('/');
                return arrayD[1]+'/'+arrayD[0]+'/'+arrayD[2];
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
            
            let ctx = document.getElementById("myChart31");
            
            new Chart(ctx, config);
        
        
        });

    },[]);

    return (
        <Row>
            <Col col="md-12">
                <Card>
                    <Card.Body>
                        <h5>Linea de tiempo de Bolivia</h5>
                        <div>
                            <canvas id="myChart31" />
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default Timeline;