import React, { Component } from "react";
import Chart from "chart.js";


class GlobalAreaPie extends Component{
  
  constructor(props){
      super(props);

  }
    
  chartRef = React.createRef();
  
  componentDidMount() {
    

    
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