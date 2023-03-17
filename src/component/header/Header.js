import {HeaderIcons , HeaderLogo , HeaderNav , HeaderProfile , HedaerAdmin} from '../index.js'


export default function Header(props){
   

    return(
    <header className="header">

        <section className="flex" style={props.header}>
            <HeaderLogo />
            <HeaderNav aboutClick={props.aboutClick} />
            <HeaderIcons profileClick={props.profileClick} />
            <HeaderProfile profile_click={props.profile_click}/>
        </section>

        <HedaerAdmin header_admin={props.header_admin} />
        
    </header>
    )
}