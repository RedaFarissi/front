export default function HeaderProfile(props){
   let style;
   (props.profile_click)? style={display:"block"}:style={display:"none"}

    return (
    <div className="profile" style={style}>
       <p> name </p>
       <a href="/update_user" className="btn">update profile</a>
       <div className="flex-btn">
          <a href="user_register.php" className="option-btn">register</a>
          <a href="/user_login" className="option-btn">login</a>
       </div>
       <a href="/user_logout" className="delete-btn" >logout</a> 
       <p>please login or register first!</p>    
    </div>
    )
}