import { logos } from "../../constants/logos";
import "./slider.css"

const Slider = () => {
    return ( 
        <>
            <section className="sliderContent">
                <div className="slider">
                    <div className="slider-track">
                        <div className="slide">
                            {logos.map(logo => <img key={logo.url} src={logo.url}></img>)}
                            {logos.map(logo => <img key={logo.url} src={logo.url}></img>)}
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Slider;