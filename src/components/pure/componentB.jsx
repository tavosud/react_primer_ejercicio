import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto..class';


const ComponentB = ({contacto}) => {
    return (
        <div>
            <h2>
                Contacto:
            </h2>
            <h3>
                Nombre: { contacto.nombre }
            </h3>
            <h3>
                Apellido: { contacto.apellido }
            </h3>
            <h4>
                Level: { contacto.email }
            </h4>
            <h5>
                Conectado: { contacto.conectado ? 'Contacto En Linea':'Contacto No Disponible' }
            </h5>
        </div>
    );
};


ComponentB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ComponentB;
