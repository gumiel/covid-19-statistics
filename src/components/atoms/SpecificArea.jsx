import React, { useState, useEffect } from 'react';
import {Row, Col, Card, BH5} from 'bootstrap-4-react';
import Axios from 'axios';
import Chart from "chart.js";
import Moment from "react-moment";
import InfoCard from './InfoCard';






const SpecificArea = function(){

  


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
      
      


      let ctx9 = document.getElementById("myChart231");
      
      new Chart(ctx9, {
        type: "horizontalBar",
        data: {
          labels: [
            `Casos (${res.data.cases})`,
            `Fallecidos (${res.data.deaths})`,
            `Recuperados (${res.data.recovered})`,
          ],
          datasets: [
            {
              label: ["Bolivia"],
              data: [res.data.cases, res.data.deaths, res.data.recovered],
              fill: false,
              backgroundColor: [
                window.chartColors.red,
                window.chartColors.purple,
                window.chartColors.green,
              ],
            },
          ],
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
                  <BH5>Cuadro de la fecha <Moment format="DD/MM/YYYY">{myData.updated}</Moment> </BH5>
                  <canvas id="myChart231" />
              </Card.Body>
            </Card>

          </Col>

          <Col col="md-4">
            <InfoCard
              paisSeleccionado={myData}
            />
          </Col>

        </Row>
      </>
  );

}

export default SpecificArea;    