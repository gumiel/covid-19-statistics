import React, { Component, useEffect } from "react";
import Chart from "chart.js";
import { Card } from 'bootstrap-4-react';

const DepartamentoAreaPie = ({datosDepartamento})=>{


    useEffect(function(){

        let ctx1 = document.getElementById("myChartDepartamento");

        var config1 = {
            type: 'pie',
            data: {
              datasets: [{
                data: [
                  datosDepartamento.activos,
                  datosDepartamento.recuperados,
                  datosDepartamento.decesos,
                ],
                backgroundColor: [
                  window.chartColors.blue,
                  window.chartColors.yellow,
                  window.chartColors.red,
                ],
                label: 'Global'
              }],
              labels: [
                'Casos '+ datosDepartamento.activos,
                'Recuperados '+ datosDepartamento.recuperados,
                'Fallecidos '+ datosDepartamento.decesos,
              ]
            },
            options: {
              responsive: true
            }
        };  
          
        new Chart(ctx1, config1);
          

    });

    return (
        <>
            <Card>
                <Card.Body>
                    <div>
                        <canvas id="myChartDepartamento" />
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default DepartamentoAreaPie;