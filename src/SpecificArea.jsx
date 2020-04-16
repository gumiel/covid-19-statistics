import React, { useState } from 'react';
import {Row, Col} from 'bootstrap-4-react';
import MultiSelect from "react-multi-select-component";






const SpecificArea = function(){

    const options = [
        { label: "Grapes 🍇", value: "grapes" },
        { label: "Mango 🥭", value: "mango" },
        { label: "Strawberry 🍓", value: "strawberry" },
    ];

    const [selected, setSelected] = useState([]);


    return (
        <>
            <Row>
                <Col>
                    <div>
                        <h2>Cuadro en Barra</h2>
                    </div>
                    <div>
                    <pre>{JSON.stringify(selected)}</pre>
                    <MultiSelect
                        options={options}
                        value={selected}
                        onChange={setSelected}
                        labelledBy={"Select"}
                    />
                    </div>
                </Col>
            </Row>
        </>
    );

}

export default SpecificArea;    