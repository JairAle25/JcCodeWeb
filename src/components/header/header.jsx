import logo from '../../imgs/jccodeweb.png';
import './header.css';
import { links } from '../../constants/links';
import { List } from 'react-bootstrap-icons';
import { useState } from 'react';

const Header = () => {
    const [classNameList,setClassNameList] = useState("listaResponsive");

    const [classNameLinks,setClassNameLinks] = useState("links");

    const RotarLista =()=>{
        if(classNameList === "listaResponsive"){
            setClassNameList("listaResponsive rotarLista");
        }
        else{
            setClassNameList("listaResponsive");
        }
        mostrarLinks();
    }

    const mostrarLinks=()=>{
        if(classNameLinks === "links"){
            setClassNameLinks("links mostrarLista");
        }
        else{
            setClassNameLinks("links");
        }
    }

    return ( 
        <>
            <header className='cabecera'>
                <div className='contentImg'>
                    <a href=""><img src={logo} alt="" /></a>
                </div>
                
                <nav className={classNameLinks}>
                     {links.map(link => <a key={link.id} href={link.url}>{link.name}</a>)}
                </nav>
                <List className={classNameList} onClick={RotarLista}></List>
            </header>
        </>
     );
}
 
export default Header;