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
        };
        
    }

    componentDidMount() {
      
      Axios.get("https://corona.lmao.ninja/v2/continents").then(res => {

             
        console.log(res.data);

        var updated= 0;
        var cases= 0;
        var todayCases= 0;
        var deaths= 0;
        var todayDeaths= 0;
        var recovered= 0;
        var active= 0;
        var critical= 0;
        var casesPerOneMillion= 0;
        var deathsPerOneMillion= 0;
        var tests= 0;
        var testsPerOneMillion= 0;
        var affectedCountries= 0;

        res.data.forEach(element => {
          updated = element.updated;
          cases= cases+element.cases;
          todayCases= todayCases+element.todayCases;
          deaths= deaths+element.deaths;
          todayDeaths= todayDeaths+element.todayDeaths;
          recovered= recovered+element.recovered;
          active= active+element.active;
          critical= critical+element.critical;
          casesPerOneMillion= casesPerOneMillion+element.casesPerOneMillion;
          deathsPerOneMillion= deathsPerOneMillion+element.deathsPerOneMillion;
          tests= tests+element.tests;
          testsPerOneMillion= testsPerOneMillion+element.testsPerOneMillion;
          affectedCountries= affectedCountries+element.affectedCountries;

        }); 
        
        this.setState({
          'updated': updated,
          'cases': cases,
          'todayCases': todayCases,
          'deaths': deaths,
          'todayDeaths': todayDeaths,
          'recovered': recovered,
          'active': active,
          'critical': critical,
          'casesPerOneMillion': casesPerOneMillion,
          'deathsPerOneMillion': deathsPerOneMillion,
          'tests': tests,
          'testsPerOneMillion': testsPerOneMillion,
          'affectedCountries': affectedCountries,
        });
        
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
              <Col>asdasd
                    <GlobalAreaPie globalData={this.state} />
                    {/* <LineGraph></LineGraph> */}            
              </Col>
              <Col>asdasd</Col>
            </Row>
        );
    }

}
export default GlobalArea;