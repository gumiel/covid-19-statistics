import React, { useState, useEffect } from 'react'
import { Row, Col } from 'bootstrap-4-react';
import Axios from 'axios';
import { TimelineCard } from '../atoms/TimelineCard';
import PieCard from '../atoms/PieCard';
import InfoCard from '../atoms/InfoCard';
import uuid from 'react-uuid'
// import { TimelineCardNew } from '../atoms/TimelineCardNew';

const AreaMultiplesPaises = ()=>{

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
        
        let pais = e.target.value;

        if(pais!==''){
            Axios.get("https://corona.lmao.ninja/v2/countries/" + pais).then(res => {
    
                setPaisSeleccionado({ ...res.data, alpha3Code: pais});
                
            }).catch(error => {
                
                if(error.response.status){
                    alert("No existe datos para este pais");
                }else{
                    alert("Error");
                }

            });


        }else{
            setPaisSeleccionado({
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
        }
        

    }



    return (
      <>
        <Row my="md-3">
          <Col col="md-12" text="center">
            <h2>Seleccione el pais</h2>
          </Col>
        </Row>
        <Row my="md-3">
          <Col>
            <select
              defaultValue={"DEFAULT"}
              className="form-control"
              id="exampleFormControlSelect2"
              onChange={(e) => {
                cambiandoPais(e);
              }}
            >
              <option value="DEFAULT" disabled>
                Seleccione
              </option>
              {paises.map((pais) => (
                <option key={uuid()} value={pais.alpha3Code}>
                  {pais.name}
                </option>
              ))}
            </select>
          </Col>
        </Row>
        <Row my="md-3">
          <Col col="md-4">
            <InfoCard paisSeleccionado={paisSeleccionado}></InfoCard>
          </Col>

          <Col col="md-8">
            <PieCard paisSeleccionado={paisSeleccionado}></PieCard>
          </Col>
        </Row>
        <Row my="md-3">
          <Col col="md-12">
            <TimelineCard
              nombrePais={paisSeleccionado.country}
              alpha3Code={paisSeleccionado.alpha3Code}
            ></TimelineCard>
          </Col>
        </Row>
      </>
    );
}

export default AreaMultiplesPaises;