export default function HedaerAdmin(props){
    return(
    <section className="flex" style={props.header_admin}>
        <a href="../admin/dashboard.php" className="logo">Admin<span>Panel</span></a>
        <nav className="navbar">
           <a href="./admin/products.php">products</a>
           <a href="./admin/placed_orders.php">orders</a>
           <a href="./admin/admin_accounts.php">admins</a>
           <a href="./admin/users_accounts.php">users</a>
           <a href="./admin/messages.php">messages</a>
        </nav>
        <div className="icons">
           <div id="menu-btn" className="fas fa-bars"></div>
           <div id="user-btn" className="fas fa-user"></div>
        </div>
        <div className="profile">
           <p> name </p>
           <a href="../admin/update_profile.php" className="btn">update profile</a>
           <div className="flex-btn">
              <a href="../admin/register_admin.php" className="option-btn">register</a>
              <a href="../admin/admin_login.php" className="option-btn">login</a>
           </div>
           <a href="../components/admin_logout.php" className="delete-btn" onclick="">logout</a> 
        </div>
    </section>      
    )
}