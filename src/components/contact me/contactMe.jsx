import { FormFunctionality } from "../../hooks/Form Functionality";
import "./contactMe.css"

const ContactMe = () => {

    const {formData,handleInputChange,enviarMail} = FormFunctionality();

    return ( 
        <>
            <section className="contactMe scroll" id="contactMe">
                <h1 className="contactTitle">CONTÁCTAME</h1>
                <form onSubmit={enviarMail} className="contactForm">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        className="inputsData"
                        required
                        autoComplete="off"
                    />
                    <label>Apellido:</label>
                    <input
                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleInputChange}
                        className="inputsData"
                        required
                        autoComplete="off"
                    />
                    <label>Mail:</label>
                    <input
                        type="email"
                        name="mail"
                        value={formData.mail}
                        onChange={handleInputChange}
                        className="inputsData"
                        required
                        autoComplete="off"
                    />
                    <label>Duda o Consulta:</label>
                    <textarea
                        name="consulta"
                        value={formData.consulta}
                        onChange={handleInputChange}
                        className="inputConsulta"
                        required
                        autoComplete="off"
                    ></textarea>
                    <input type="submit" value="ENVIAR" className="buttonContact" />
                </form>
            </section>
        </>
     );
}
 
export default ContactMe;