import React from "react";
import { Container } from 'bootstrap-4-react';
import AreaMultiplesPaises from "../organisms/AreaMultiplesPaises";
import AreaBolivia from "../organisms/AreaBolivia";
import AreaGlobal from "../organisms/AreaGlobal";


const Estadisticas = function(){

    return (
      <Container>

        <ul class="nav nav-tabs">
            <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#home">Datos Globales</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#menu1">Bolivia</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#menu2">Por Pais</a>
            </li>
        </ul>
  
        <div className="tab-content">
            <div id="home" className="container tab-pane active">
            <AreaGlobal></AreaGlobal>
            </div>
            <div id="menu1" className="container tab-pane fade">
            <AreaBolivia></AreaBolivia>
            </div>
            <div id="menu2" className="container tab-pane fade">
            <AreaMultiplesPaises></AreaMultiplesPaises>
            </div>
        </div>

      </Container>
    );
}

export default Estadisticas;