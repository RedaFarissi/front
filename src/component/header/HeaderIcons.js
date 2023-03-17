export default function HeaderIcons(props){
    return(
    <div className="icons">
       <div id="menu-btn" className="fas fa-bars"></div>
       <a href="/search"><i className="fas fa-search ms-2"></i></a>
       <a href="/wishlist"><i className="fas fa-heart ms-2"></i><span></span></a>
       <a href="/cart"><i className="fas fa-shopping-cart"></i><span></span></a>
       <div id="user-btn" className="fas fa-user ms-2" onClick={props.profileClick}></div>
    </div>
    )
}