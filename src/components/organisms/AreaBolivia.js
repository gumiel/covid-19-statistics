import React from 'react'
import SpecificArea from '../atoms/SpecificArea';
import Timeline from '../atoms/Timeline';
import { TimelineCard } from '../atoms/TimelineCard';

const AreaBolivia = ()=>{

    return (
        <>
            <SpecificArea></SpecificArea>
            <Timeline></Timeline>
            <TimelineCard
                nombrePais='Bolivia'
                alpha3Code='BOL'
            ></TimelineCard>
        </>
    );
}

export default AreaBolivia;