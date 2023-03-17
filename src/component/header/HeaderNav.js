import {Link} from 'react-router-dom';
export default function HeaderNav(props){
    return(
    <nav className="navbar">
        <Link to='/about' onClick={props.aboutClick}> about </Link>    
        <Link to='/orders' > orders </Link>    
        <Link to='/shop' > shop </Link>    
        <Link to='/contact' > contact </Link>    
    </nav>
    )
}