import React from 'react'

export const la = ( {texto, texto2} ) => {
// const Navbar = ( {texto="algo", texto2="algo2"} )  ----- le puedo porner valores por defecto 

    // desestructurar para no usar props.algo
        //const {texto, texto2} = props;

    return (
        <ul>
            <li> {texto}  </li>
            <li> {texto2}   </li>
            <li>  </li>
            <li>  </li>
        </ul>
    )


}

// export default Navbar; ---- no se usa llaves en el import, creo
