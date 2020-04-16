import React, { Component } from "react";
import Chart from "chart.js";


class GlobalAreaPie extends Component{
  
  constructor(props){
      super(props);

  }
    
  chartRef = React.createRef();
  
  componentDidMount() {
    
    // console.log(this.props);
    
  }
    
  render() {

    return (
      <> 
        <canvas id="myChart" ref={this.chartRef} />
      </>
    );

  }

  componentDidUpdate(){

    const config = this.dibujar(this.props.globalData);
    
    const myChartRef = this.chartRef.current.getContext("2d");
    new Chart(myChartRef, config);

  }

  dibujar(data){
    
    const global_data = data;

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
    return config;
  }

}

export default GlobalAreaPie;