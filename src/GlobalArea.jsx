import React, { Component } from 'react';
import { Row, Col } from 'bootstrap-4-react';
import Axios from 'axios';
import GlobalAreaPie from './GlobalAreaPie';



class GlobalArea extends Component{

    constructor(prop){
        super(prop);

        this.state = {
          updated: 0,
          cases: 0,
          todayCases: 0,
          deaths: 0,
          todayDeaths: 0,
          recovered: 0,
          active: 0,
          critical: 0,
          casesPerOneMillion: 0,
          deathsPerOneMillion: 0,
          tests: 0,
          testsPerOneMillion: 0,
          affectedCountries: 0,
        }
        
    }

    componentDidMount() {
      
      Axios.get("https://corona.lmao.ninja/all").then(res => {

        this.setState(res.data);      
      });
    }

    

    render(){

        return(
            <Row>
              <Col>
                <h2>Datos nivel mundial.</h2>
                <p>Fecha de actualizacion: {this.state.updated}</p>
                <p>Casos nivel mundial: <b>{this.state.cases}</b></p>
                <p>Total de recuperados: <b>{this.state.recovered}</b></p>
                <p>Total de fallecidos: <b>{this.state.deaths}</b></p>
                <p>Casos del dia de hoy: {this.state.todayCases}</p>
                <p>Total de casos activos: {this.state.active}</p>
                <p>Casos criticos: {this.state.critical}</p>
                <p>Paises afectados: {this.state.affectedCountries}</p>
              </Col>
              <Col>
                    <GlobalAreaPie globalData={this.state} />
                    {/* <LineGraph></LineGraph> */}            
              </Col>
            </Row>
        );
    }

}
export default GlobalArea;