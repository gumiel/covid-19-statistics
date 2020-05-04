import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Form } from 'bootstrap-4-react';
import Axios from 'axios';
import Moment from "react-moment";
import { TimelineCard } from './components/atoms/TimelineCard';

const TimelineSelect = ()=>{

    const [paisSeleccionado, setPaisSeleccionado] = useState({
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
        country: '',
        countryInfo:{},
        alpha3Code:''
    });

    
    






    const [paises, setPaises] = useState([])

    useEffect(()=>{
        Axios.get("https://restcountries.eu/rest/v2/all").then(res => {

            setPaises(res.data);
            
        });
    },[]);













    const cambiandoPais = (e)=>{
        
        let pais = e.target.value
        
        Axios.get("https://corona.lmao.ninja/v2/countries/" + pais).then(res => {

            setPaisSeleccionado({ ...res.data, alpha3Code: pais});
            
        });

    }



    return (
        <>  
            <Row>
                <Col>
                    <h2>Seleccione el pais</h2>   
                    
                    <select className="form-control" id="exampleFormControlSelect2" onChange={(e) => { cambiandoPais(e) }}> 
                        <option selected >Seleccione</option>
                        {
                        paises.map( pais => (
                            <option value={pais.alpha3Code} >{pais.name}</option>  
                        ))
                        }                        
                    </select>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>
                        Datos actuales de {paisSeleccionado.country} <img src={paisSeleccionado.countryInfo.flag} heigth="30" width="30" />
                        {/* Datos actuales de {paisSeleccionado.countryInfo} */}
                    </h3>
                    <p>Fecha de actualizacion: <Moment format="DD/MM/YYYY">{paisSeleccionado.updated}</Moment></p>
                    <p>Casos nivel mundial: <b>{paisSeleccionado.cases}</b></p>
                    <p>Total de recuperados: <b>{paisSeleccionado.recovered}</b></p>
                    <p>Total de fallecidos: <b>{paisSeleccionado.deaths}</b></p>
                    <p>Casos del dia de hoy: {paisSeleccionado.todayCases}</p>
                    <p>Total de casos activos: {paisSeleccionado.active}</p>
                    <p>Casos criticos: {paisSeleccionado.critical}</p>
                </Col>
                <Col>
                    <TimelineCard
                        nombrePais={paisSeleccionado.country}
                        alpha3Code={paisSeleccionado.alpha3Code}
                    ></TimelineCard>
                </Col>
            </Row>
        </>
    );
}

export default TimelineSelect;