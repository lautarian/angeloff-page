import { propiedades } from "../propi3"



export const getPropiedadById = ( id ) => {
    return propiedades.filter( propiedad => propiedad.id === parseInt(id));
}




import { getPropiedadById } from "./selectors/GetPropiedadById"
import React, { Component }  from 'react';




export const ListaDePropiedades = ({ id }) => {

    const propiedades = getPropiedadById( id );

    return (
        <>
        <h1>  Lista de Propiedades - { id }  </h1>

            <ul>
                    {
                        propiedades.map( propiedad => (
                            <li key={ propiedad.id}>
                                 {propiedad.id}, {propiedad.tipo}, {propiedad.ubicacion}, {propiedad.estado}, {propiedad.precio}
                            </li>
                        ))
                    }
                   

            </ul>
        </>
    )
}


<Grid>
    <ListaDePropiedades id= "2"/>
</Grid>