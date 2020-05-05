import React, { useEffect } from 'react';
import { Card } from 'bootstrap-4-react';
import Chart from "chart.js";

const PieCard = function({paisSeleccionado}){

    

    useEffect(function(){

        let ctx1 = document.getElementById("myChart7");

        var config1 = {
            type: 'pie',
            data: {
              datasets: [{
                data: [
                  paisSeleccionado.cases,
                  paisSeleccionado.recovered,
                  paisSeleccionado.deaths,
                ],
                backgroundColor: [
                  window.chartColors.blue,
                  window.chartColors.yellow,
                  window.chartColors.red,
                ],
                label: 'Global'
              }],
              labels: [
                'Casos '+ paisSeleccionado.cases,
                'Recuperados '+ paisSeleccionado.recovered,
                'Fallecidos '+ paisSeleccionado.deaths,
              ]
            },
            options: {
              responsive: true
            }
        };  
          
        let chart1 = new Chart(ctx1, config1);
          

    });

    return (
        <Card>
            <Card.Body>
                <div>
                    <canvas id="myChart7" />
                </div>
            </Card.Body>
        </Card>
    );
}

export default PieCard