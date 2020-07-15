import React from "react";
import { Container } from 'bootstrap-4-react';
import AreaMultiplesPaises from "../organisms/AreaMultiplesPaises";
import AreaBolivia from "../organisms/AreaBolivia";
import AreaGlobal from "../organisms/AreaGlobal";
import AreaDepartamento from "../organisms/AreaDepartamento";


const Estadisticas = function(){

    return (
      <Container>

        <ul class="nav nav-tabs">
          <li class="nav-item active">
            <a class="nav-link active " data-toggle="tab" href="#menu3">Cochabamba</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#menu1">Bolivia</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#menu2">Por Pais</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#home">Datos Globales</a>
          </li>
        </ul>
  
        <div className="tab-content">
          <div id="menu3" className="container tab-pane active">
            <AreaDepartamento/>
          </div>
          <div id="home" className="container tab-pane fade">
            <AreaGlobal/>
          </div>
          <div id="menu1" className="container tab-pane fade">
            <AreaBolivia/>
          </div>
          <div id="menu2" className="container tab-pane fade">
            <AreaMultiplesPaises/>
          </div>
        </div>

      </Container>
    );
}

export default Estadisticas;