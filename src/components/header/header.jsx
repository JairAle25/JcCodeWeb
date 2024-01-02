import logo from '../../imgs/jccodeweb.png';
import './header.css';
import { links } from '../../constants/links';

const Header = () => {
    return ( 
        <>
            <header className='cabecera'>
                <div className='contentImg'>
                    <a href=""><img src={logo} alt="" /></a>
                </div>
                
                <nav className='links'>
                     {links.map(link => <a key={link.id} href={link.url}>{link.name}</a>)}
                </nav>
            </header>
        </>
     );
}
 
export default Header;