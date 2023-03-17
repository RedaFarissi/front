export default function UserRegister(props){
    return(
<section className="form-container">

   <form action="" method="post">
      <h3>register now</h3>
      <input type="text" name="name" required placeholder="enter your username" maxlength="20"  className="box"/>
      <input type="email" name="email" required placeholder="enter your email" maxlength="50"  className="box" oninput="this.value = this.value.replace(/\s/g, '')"/>
      <input type="password" name="pass" required placeholder="enter your password" maxlength="20"  className="box" oninput="this.value = this.value.replace(/\s/g, '')"/>
      <input type="password" name="cpass" required placeholder="confirm your password" maxlength="20"  className="box" oninput="this.value = this.value.replace(/\s/g, '')"/>
      <input type="submit" value="register now" className="btn" name="submit"/>
      <p>already have an account?</p>
      <a href="user_login.php" className="option-btn">login now</a>
   </form>

</section>
    )
}