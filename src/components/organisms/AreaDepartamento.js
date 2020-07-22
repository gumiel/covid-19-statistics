import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Row, Col, Card } from 'bootstrap-4-react';
import Moment from "react-moment";
import DepartamentoAreaPie from '../atoms/DepartamentoAreaPie';
import DepartamentoTimeline from '../atoms/DepartamentoTimeline';
import DepartamentoTimelinePorDia from '../atoms/DepartamentoTimelinePorDia';

const AreaDepartamento = ()=>{

    const [cocha, setCocha] = useState([]);
    const [cochaUltimaFecha, setCochaUltimaFecha] = useState({
                                                              fecha: "",
                                                              activos: 0,
                                                              confirmados: 0,
                                                              decesos: 0,
                                                              descartados: 0,
                                                              recuperados: 0,
                                                              sospechosos: 0,
                                                            });
    useEffect(()=>{

        // Axios.get("https://my-json-server.typicode.com/gumiel/api_rest_covid_19_cochabamba/cochabamba").then(res => {
        Axios.get("https://raw.githubusercontent.com/gumiel/api_rest_covid_19_cochabamba/master/cochabamba.json").then(res => {
          // res.data = res.data.replace(/(\r\n|\n|\r)/gm, "");
          // res.data =   JSON.parse(res.data);  
          console.log(res.data);
          console.log(res.data[0]);
          let nuevo = []
          nuevo = res.data.filter(function(d){
              return d.validado === true
          });
          setCocha(nuevo);
          setCochaUltimaFecha(nuevo[0]);
        });

    },[]);
    

    return (
        <>
            <Row my="md-3">
              <Col text="center">
                <h2>Datos en Cochabamba</h2>
              </Col>
            </Row>

            <Row my="md-3">
              <Col col="md-4">
                <Card>
                    <Card.Body>
                        <h2>En Cochabamba</h2>
                        <p>Fecha de actualizacion: <Moment format="DD/MM/YYYY">{cochaUltimaFecha.fecha}</Moment></p>                    
                        <p>Casos Activos: <b>{cochaUltimaFecha.activos}</b></p>
                        <p>Casos confirmados: <b>{cochaUltimaFecha.confirmados}</b></p>
                        <p>Decesos: <b>{cochaUltimaFecha.decesos}</b></p>
                        <p>Descartados: <b>{cochaUltimaFecha.descartados}</b></p>
                        <p>Recuperados: <b>{cochaUltimaFecha.recuperados}</b></p>
                        <p>Sospechosos: <b>{cochaUltimaFecha.sospechosos}</b></p>
                    </Card.Body>
                </Card>
              
              </Col>
              <Col col="md-8">
                    <DepartamentoAreaPie datosDepartamento={cochaUltimaFecha} />
              </Col>
            </Row>
            <Row>
                <Col col="md-12">
                    <Card>
                        <Card.Body>
                            <h5>Linea de tiempo en Cochabamba (Cuadro incremental por día)</h5>
                            <div>
                              <DepartamentoTimelinePorDia dataCocha={cocha} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col col="md-12">
                    <Card>
                        <Card.Body>
                            <h5>Linea de tiempo en Cochabamba (Cuadro incremental)</h5>
                            <div>
                              <DepartamentoTimeline dataCocha={cocha} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        </>
    );
}

export default AreaDepartamento;