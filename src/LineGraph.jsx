import React, { Component } from "react";
import Chart from "chart.js";
import Axios from 'axios';


export default class LineGraph extends Component {

  constructor(props){
    super(props);
  }
  
  chartRef = React.createRef();

  componentDidMount() {

    
    console.log(this.props.globalData);
    Axios.get("https://corona.lmao.ninja/all").then(res => {
      console.log(res.data);
      const global_data = res.data;

      window.chartColors = {
        red: 'rgb(255, 99, 132)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(54, 162, 235)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(201, 203, 207)'
      };

      const config = {
        type: 'pie',
        data: {
          datasets: [{
            data: [
              global_data.cases,
              global_data.recovered,
              global_data.deaths,
            ],
            backgroundColor: [
              window.chartColors.blue,
              window.chartColors.yellow,
              window.chartColors.red,
            ],
            label: 'Global'
          }],
          labels: [
            'Casos '+ global_data.cases,
            'Recuperados '+ global_data.recovered,
            'Fallecidos '+ global_data.deaths,
          ]
        },
        options: {
          responsive: true
        }
      };
      
      const myChartRef = this.chartRef.current.getContext("2d");
      new Chart(myChartRef, config);

      
    });

  }

  render() {
    
    return (
      <div>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}
