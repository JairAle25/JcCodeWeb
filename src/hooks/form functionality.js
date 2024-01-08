import React from 'react'
import { useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const FormFunctionality = () => {

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        mail: '',
        consulta: '',
    });
    
    const handleInputChange = (e) => {
    const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    
    const enviarMail =(e)=>{
        e.preventDefault();
        const MySwal = withReactContent(Swal)
        const apiKey = import.meta.env.VITE_API_KEY;       
        const body = {
            "sender": {
                "name": "Contactr JcCodeWeb",
                "email": "contactJcCodeWeb@gmail.com"
            },
            "to": [
                {
                    "email": "jccodeweb@gmail.com", 
                    "name": "Jair Cornejo"
                }
            ],
            "subject": "Solicitud de contacto en JcCodeWeb",
            "htmlContent": `<h1 style="color:#1f1f20;font-size:2rem">SE HA SOLICITADO CONTACTO</h1> 
                <p style="color:#1f1f20;font-size:1.5rem">Nombre : <b>${formData.nombre}</b> </p>
                <p style="color:#1f1f20;font-size:1.5rem">Apellido : <b>${formData.apellido}</b> </p>
                <p style="color:#1f1f20;font-size:1.5rem">Email : <b>${formData.mail}</b> </p>
                <p style="color:#1f1f20;font-size:1.5rem">Duda o Consulta : <b>${formData.consulta}</b> </p>`
        }
        fetch("https://api.brevo.com/v3/smtp/email", {
            method: 'POST',
            headers: {
                'api-key': apiKey,
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            MySwal.fire({
                title:'Formulario enviado!',
                text:'Pronto será contactado',
                confirmButtonColor: '#1f1f20',
                icon:'success'
            });
        })
        setFormData({
            nombre: '',
            apellido: '',
            mail: '',
            consulta: ''
          });
    }

    return {
        formData,
        handleInputChange,
        enviarMail
    }
}
