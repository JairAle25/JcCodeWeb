import logo from './imgs/jccodeweb.png';
import './header.css';

const links = [
    {id:1,name:"Sobre Nosotros",url:"#sobreNosotros"},
    {id:2,name:"Cursos",url:"#cursos"}
];

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