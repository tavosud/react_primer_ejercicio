import React from 'react';
import { Contacto } from '../models/contacto.class';
import ComponentB from './pure/componentB';


const ComponentA = () => {

    const defaultContact = new Contacto('Juan', 'Perez', 'juanp@gmail.com', false);

    return (
        <div>
            <ComponentB contacto={defaultContact} />
        </div>
    );
};


export default ComponentA;
