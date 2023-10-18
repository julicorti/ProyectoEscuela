import React from 'react'
import "../../CSS/style.css"
import 'boxicons'

import image from '../../Image/logo-et.png'
const Login = () => {

    return (
        <>
           <div className='triangulo'>

        </div >     
      
        
       <div className='pagina-login'>
        <div className='titulo'>
        <h1>Escuela Técnica Nº 36</h1>
       <img src={image} alt="" />
        </div>
        
        <div className="contenedor">
         
          <form action="">
            <h2>Login</h2>
          
            <div className='input-box'>
                <input type="text" placeholder='Usuario' required/>
                <box-icon color="#FFFFFF" id="i" type='solid' name='user'>
                    
                </box-icon>
            </div>
            <div className='input-box'>
                <input type="password" placeholder='Contraseña' required/>
                <box-icon color="#FFFFFF" id="i" name='lock-alt' type='solid' ></box-icon>
            </div>
            
            <button type='submit' className='btn'>Login</button>
          
          </form>
           
            
       
        </div>
        </div>
        </>
    )
}
export default Login