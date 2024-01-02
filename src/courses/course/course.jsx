import cursoDesarrollo from "../../imgs/cursoDesarroloWeb.jpg"
import "./course.css"

const Course = ({urlImage,title,descrip,linkInfo,linkAnotarse}) => {
    return ( 
        <>
            <div className="cardCourse">
                <img src={urlImage} alt="" />
                <div className="contentInfoCourse">
                    <h1 className="tituloCard">{title}</h1>
                    <p className="descripCard">{descrip}</p>
                    <div className="liksCursos">
                        <a href={linkInfo} className="linkInfo" target="_blank">Temario del curso</a>
                        <a href={linkAnotarse} className="linkAnotarse" target="_blank">Inscribite Ahora!!</a>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Course;