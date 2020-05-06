import React from 'react'
import Moment from "react-moment";
import { Card, BH5 } from 'bootstrap-4-react';



const InfoCard = ({paisSeleccionado}) =>{

    return (
        <Card>
            <Card.Body>
                <BH5>
                    <img src={paisSeleccionado.countryInfo.flag} heigth="30" width="30" alt=''/>
                    Datos actuales de {paisSeleccionado.country} 
                </BH5>
                <p>Fecha de actualizacion: <Moment format="DD/MM/YYYY">{paisSeleccionado.updated}</Moment></p>
                <p>Casos nivel mundial: <b>{paisSeleccionado.cases}</b></p>
                <p>Total de recuperados: <b>{paisSeleccionado.recovered}</b></p>
                <p>Total de fallecidos: <b>{paisSeleccionado.deaths}</b></p>
                <p>Casos del dia de hoy: {paisSeleccionado.todayCases}</p>
                <p>Total de casos activos: {paisSeleccionado.active}</p>
                <p>Casos criticos: {paisSeleccionado.critical}</p>
            </Card.Body>
        </Card>
    );

}

export default InfoCard;