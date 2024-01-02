import Course from "./course/course";
import "./courseList.css"
import { cursos } from "../../constants/cursos";

const CourseList = () => {
    return ( 
        <>
            <div className="content" id="cursos">
                <h1>Cursos Disponibles</h1>
                <section className="courses">
                    
                    <div className="contentCourses">
                        {cursos.map(curso => 
                        <Course 
                            key={curso.id} 
                            urlImage={curso.urlImagen} 
                            title={curso.title} 
                            descrip={curso.descripcion} 
                            linkInfo={curso.linkInfo} 
                            linkAnotarse={curso.linkAnotarse} 
                            price={curso.price}>
                        </Course>)}
                    </div>
                </section>
            </div>
        </>
     );
}
 
export default CourseList;