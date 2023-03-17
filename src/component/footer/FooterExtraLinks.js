export default function FooterExtraLinks(props){
    return(
        <div className="box">
          <h3>extra links</h3>
          <a href="user_login.php"> <i className="fas fa-angle-right"></i> login</a>
          <a href="user_register.php"> <i className="fas fa-angle-right"></i> register</a>
          <a href="cart.php"> <i className="fas fa-angle-right"></i> cart</a>
          <a href="orders.php"> <i className="fas fa-angle-right"></i> orders</a>
       </div>
    )
}