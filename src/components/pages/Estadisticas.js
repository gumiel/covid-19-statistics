import React from "react";
import { Container } from 'bootstrap-4-react';
import AreaMultiplesPaises from "../organisms/AreaMultiplesPaises";
import AreaBolivia from "../organisms/AreaBolivia";
import AreaGlobal from "../organisms/AreaGlobal";
// import { TimelineCardNew } from "../atoms/TimelineCardNew";


const Estadisticas = function(){

    return (
      <Container>

        {/* <TimelineCardNew></TimelineCardNew> */}
        
        <AreaGlobal></AreaGlobal>

        <AreaBolivia></AreaBolivia>
        
        <AreaMultiplesPaises></AreaMultiplesPaises>


      </Container>
    );
}

export default Estadisticas;