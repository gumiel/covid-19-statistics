import React, { useState, useEffect } from 'react';
import {Row, Col} from 'bootstrap-4-react';
import Axios from 'axios';
import Chart from "chart.js";
// import MultiSelect from "react-multi-select-component";






const SpecificArea = function(){

  
  // const options = [
  //     { label: "Grapes 🍇", value: "grapes" },
  //     { label: "Mango 🥭", value: "mango" },
  //     { label: "Strawberry 🍓", value: "strawberry" },
  // ];

  // const [selected, setSelected] = useState([]);

  const [dataBarra, setDataBarra] = useState({
    chartRef2 : React.createRef()
  });

  const [myData, setMyData] = useState({
    "updated": 1587044800696,
    "country": "",
    "countryInfo": {
      "_id": 0,
      "iso2": "",
      "iso3": "",
      "lat": 0,
      "long": 0,
      "flag": ""
    },
    "cases": 0,
    "todayCases": 0,
    "deaths": 0,
    "todayDeaths": 0,
    "recovered": 0,
    "active": 0,
    "critical": 0,
    "casesPerOneMillion": 0,
    "deathsPerOneMillion": 0,
    "tests": 0,
    "testsPerOneMillion": 0
  });

  useEffect(()=>{
    Axios.get("https://corona.lmao.ninja/v2/countries/BOL").then(res => {
      console.log(res.data);
      setMyData(res.data);
      
      var MONTHS = ['Casos nacionales', 'fallecidos', 'recuperados'];
      var color = Chart.helpers.color;

      var horizontalBarChartData = {
        labels: ["Casos nacionales", "fallecidos", "recuperados"],
        datasets: [
          {
            label: "Casos encontrados",
            backgroundColor: color(window.chartColors.red)
              .alpha(0.5)
              .rgbString(),
            borderColor: window.chartColors.red,
            // borderWidth: 1,
            data: [0],
          },
          {
            label: "Fallecidos",
            backgroundColor: color(window.chartColors.blue)
              .alpha(0.5)
              .rgbString(),
            borderColor: window.chartColors.blue,
            data: [300],
          },
          {
            label: "Recuperados",
            backgroundColor: color(window.chartColors.purple)
              .alpha(0.5)
              .rgbString(),
            borderColor: window.chartColors.purple,
            data: [500],
          },
        ],
      };

      const myChartRef2 = dataBarra.chartRef2.current.getContext("2d");

      new Chart(myChartRef2, {
				type: 'horizontalBar',
				data: horizontalBarChartData,
				options: {
					// Elements options apply to all of the options unless overridden in a dataset
					// In this case, we are setting the border of each horizontal bar to be 2px wide
					elements: {
						rectangle: {
							borderWidth: 2,
						}
					},
					responsive: true,
					legend: {
						position: 'right',
					},
					title: {
						display: true,
						text: 'Chart.js Horizontal Bar Chart'
					}
				}
			});



      

    });
  },[]);
  
  return (
      <>
        <Row>
          <Col>
            <h2>Datos en Bolivia.</h2>
            <p>Fecha de actualizacion: {myData.updated}</p>
            <p>Casos a nivel nacional: <b>{myData.cases}</b></p>
            <p>Total de recuperados: <b>{myData.recovered}</b></p>
            <p>Total de fallecidos: <b>{myData.deaths}</b></p>
            <p>Casos del dia de hoy: {myData.todayCases}</p>
            <p>Total de casos activos: {myData.active}</p>
            <p>Casos criticos: {myData.critical}</p>
          </Col>
          <Col>
            <div>
            <h2>Cuadro en Barra {myData.updated}</h2>
            </div>
            <div>
                {/* <pre>{JSON.stringify(selected)}</pre>
                <MultiSelect
                    options={options}
                    value={selected}
                    onChange={setSelected}
                    labelledBy={"Select"}
                /> */}
              <canvas id="myChart2" ref={dataBarra.chartRef2} />
            </div>
          </Col>
        </Row>
      </>
  );

}

export default SpecificArea;    