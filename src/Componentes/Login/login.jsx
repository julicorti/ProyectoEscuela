import React from 'react'
import '../Style/style.css'
import contraseña from '../Iconos/lock-solid.svg'
import persona from '../Iconos/icon_person.jpg'
import image from '../Image/logo-et.png'
const Login = () => {

    return (
        <div style={{ height: "98.3vh", display: "flex", justifyContent: "center", alignItems: "center" }} className='pagina-contenedor'>

            <div style={{ boxShadow: "1px 2px 3px grey", display: "flex", gap: "10px", alignItems: "center", flexDirection: "column", justifyContent: "center", width: "25vw", height: "50vh", backgroundColor: "white", borderRadius: "10px" }} className='container'>
                <div style={{display: "flex", justifyContent: "center", alignContent: "center", flexDirection: "column"}} className='header'>
                    <div style={{ fontSize: "30px" }} className='text'>Iniciar sesion</div>
                    <div className='underline'></div>
                    <img style={{ width: "8vw", height: "19vh" }} src={image} alt="" />
                </div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} className='inputs'>
                    <div className='input'>
                        <img style={{width: "25px" , paddingRight: "9px", alignItems: "center" }} src={persona} alt="" />
                        <input placeholder='Nombre' type="name" />
                    </div>
                    <div className='input'>
                        <img style={{ width: "15px" , paddingRight: "15px"}} src={contraseña} alt="" />
                        <input placeholder='Contraseña'  type="password" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login