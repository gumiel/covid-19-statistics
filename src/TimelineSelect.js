import React, { useState, useEffect } from 'react'
import { Row, Col } from 'bootstrap-4-react';
import Axios from 'axios';
import { TimelineCard } from './components/atoms/TimelineCard';
import PieCard from './components/atoms/PieCard';
import InfoCard from './components/atoms/InfoCard';

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
        
        let pais = e.target.value;

        if(pais!==''){
            Axios.get("https://corona.lmao.ninja/v2/countries/" + pais).then(res => {
    
                setPaisSeleccionado({ ...res.data, alpha3Code: pais});
                
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
            <Row>
                <Col>
                    <h2>Seleccione el pais</h2>   
                    
                    <select defaultValue={'DEFAULT'}  className="form-control" id="exampleFormControlSelect2" onChange={(e) => { cambiandoPais(e) }}> 
                        <option value="DEFAULT" disabled>Seleccione</option>
                        {
                        paises.map( pais => (
                            <option key= value={pais.alpha3Code} >{pais.name}</option>  
                        ))
                        }                        
                    </select>
                </Col>
            </Row>
            <Row my="md-3">
                <Col col="4 md">
                    <InfoCard
                    paisSeleccionado={paisSeleccionado}
                    ></InfoCard>
                </Col>
                
                <Col col="8 md">
                    <PieCard
                        paisSeleccionado={paisSeleccionado} 
                    ></PieCard>
                </Col>
            </Row>
            <Row>
                <Col col="12 md">
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