import React from "react";
import { Container } from "bootstrap-4-react";
import Cochabamba from "../Cochabamba/Cochabamba";
import Bolivia from "../Bolivia/Bolivia";
import Paises from "../Paises/Paises";
import Mundo from "../Mundo/Mundo";

const Estadisticas = function () {
  return (
    <Container>
      <ul class="nav nav-tabs">
        <li class="nav-item active">
          <a class="nav-link active " data-toggle="tab" href="#menu3">
            Cochabamba
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#menu1">
            Bolivia
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#menu2">
            Por Pais
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#home">
            Datos Globales
          </a>
        </li>
      </ul>

      <div className="tab-content">
        <div id="menu3" className="container tab-pane active">
          <Cochabamba />
        </div>
        <div id="home" className="container tab-pane fade">
          <Mundo />
        </div>
        <div id="menu1" className="container tab-pane fade">
          <Bolivia />
        </div>
        <div id="menu2" className="container tab-pane fade">
          <Paises />
        </div>
      </div>
    </Container>
  );
};

export default Estadisticas;
