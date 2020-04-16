import React, { useState, useEffect } from 'react';
import {Row, Col} from 'bootstrap-4-react';
import Axios from 'axios';
// import MultiSelect from "react-multi-select-component";






const SpecificArea = function(){

    // const options = [
    //     { label: "Grapes 🍇", value: "grapes" },
    //     { label: "Mango 🥭", value: "mango" },
    //     { label: "Strawberry 🍓", value: "strawberry" },
    // ];

    // const [selected, setSelected] = useState([]);

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
        });
    },[]);

    return (


        
        <>
            <Row>
                <Col>
                    <h2>Datos en Bolivia.</h2>
                    <p>Fecha de actualizacion: {myData.updated}</p>
                    <p>Casos nivel mundial: <b>{myData.cases}</b></p>
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
                    </div>
                </Col>
            </Row>
        </>
    );

}

export default SpecificArea;    