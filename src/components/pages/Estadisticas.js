import React from "react";
import { Container } from 'bootstrap-4-react';
import AreaMultiplesPaises from "../organisms/AreaMultiplesPaises";
import AreaBolivia from "../organisms/AreaBolivia";
import AreaGlobal from "../organisms/AreaGlobal";


const Estadisticas = function(){

    return (
      <Container>
        
        <AreaGlobal></AreaGlobal>
        
        <AreaBolivia></AreaBolivia>
        
        <AreaMultiplesPaises></AreaMultiplesPaises>


      </Container>
    );
}

export default Estadisticas;