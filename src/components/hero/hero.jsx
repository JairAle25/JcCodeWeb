import videoFondo from "../../imgs/fondoHero.mp4"
import "./hero.css"

const Hero = () => {
    return ( 
        <>
            <main className="hero">
                <div className="contentVideo">
                    <video src={videoFondo} className="videoFondo" preload="auto" loop autoPlay muted ></video>
                    <div className="capaNegra"></div>
                    <div className="contentHero">
                        <h1 className="tituloHero">EMPIEZA A PROGRAMAR<br /> TU FUTURO</h1>
                    </div>  
                </div>
            </main>
        </>
     );
}
 
export default Hero;