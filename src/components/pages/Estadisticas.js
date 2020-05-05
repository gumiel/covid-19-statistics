import React from "react";
import { Container } from 'bootstrap-4-react';

import SpecificArea from "../atoms/SpecificArea";
import Timeline from "../atoms/Timeline";
import AreaMultiplesPaises from "../organisms/AreaMultiplesPaises";
import AreaBolivia from "../organisms/AreaBolivia";
import AreaGlobal from "../organisms/AreaGlobal";



const Estadistica = function(){

    return (
      <Container>
        
        <AreaMultiplesPaises></AreaMultiplesPaises>
        
        <AreaGlobal></AreaGlobal>

        <AreaBolivia></AreaBolivia>

      </Container>
    );
}

export default Estadistica;