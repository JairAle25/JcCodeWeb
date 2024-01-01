import videoFondo from "./imgs/fondoHero1.mp4"
import "./hero.css"

const Hero = () => {
    return ( 
        <>
            <main className="hero">
                <div className="contentVideo">
                    <video src={videoFondo} loop autoPlay className="videoFondo"></video>
                    <div className="capaNegra"></div>
                    <div className="contentHero">
                        <h1>EMPIEZA A PROGRAMA<br /> TU FUTURO</h1>
                    </div>  
                </div>
            </main>
        </>
     );
}
 
export default Hero;