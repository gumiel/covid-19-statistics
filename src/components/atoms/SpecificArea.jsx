import React, { useState, useEffect } from 'react';
import {Row, Col, Card, BH5} from 'bootstrap-4-react';
import Axios from 'axios';
import Chart from "chart.js";
import Moment from "react-moment";
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

      setMyData(res.data);
      
      

      const myChartRef2 = dataBarra.chartRef2.current.getContext("2d");

      
      new Chart(myChartRef2, {
        type: 'horizontalBar',
        data: {
          "labels": [`Casos (${res.data.cases})`, `Fallecidos (${res.data.deaths})`, `Recuperados (${res.data.recovered})`],
          "datasets": [{
            "label": ["Bolivia"], 
            "data": [res.data.cases, res.data.deaths, res.data.recovered], 
            "fill": false,
            "backgroundColor": [window.chartColors.red, window.chartColors.purple, window.chartColors.green ]
          }]
        },
      });



      

    });
  },[]);
  
  return (
      <>
        <Row my="md-3">
          <Col col="md-12" text="center">
            <h2>Datos en Bolivia.</h2>
          </Col>
        </Row>
        <Row my="md-3">
          
          <Col col="md-8">
            <Card>
              <Card.Body>
                {/* <Card.Text> */}
                  <BH5>Cuadro de la fecha <Moment format="DD/MM/YYYY">{myData.updated}</Moment> </BH5>
                      {/* <pre>{JSON.stringify(selected)}</pre>
                      <MultiSelect
                          options={options}
                          value={selected}
                          onChange={setSelected}
                          labelledBy={"Select"}
                      /> */}
                  <canvas id="myChart2" ref={dataBarra.chartRef2} />
                {/* </Card.Text> */}
              </Card.Body>
            </Card>

          </Col>
          <Col col="md-4">
          <Card>
            <Card.Body>
              {/* <Card.Text> */}
                <p>Casos a nivel nacional: <b>{myData.cases}</b></p>
                <p>Total de recuperados: <b>{myData.recovered}</b></p>
                <p>Total de fallecidos: <b>{myData.deaths}</b></p>
                <p>Casos del dia de hoy: {myData.todayCases}</p>
                <p>Total de casos activos: {myData.active}</p>
                <p>Casos criticos: {myData.critical}</p>
              {/* </Card.Text> */}
            </Card.Body>
          </Card>
            
          </Col>
        </Row>
      </>
  );

}

export default SpecificArea;    