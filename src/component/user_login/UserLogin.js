export default function UserLogin(props){
    return(
        
<section className="form-container">
    <form action="" method="post">
       <h3>login now</h3>
       <input type="email" name="email" required placeholder="enter your email" maxlength="50"  className="box" oninput="this.value = this.value.replace(/\s/g, '')"/>
       <input type="password" name="pass" required placeholder="enter your password" maxlength="20"  className="box" oninput="this.value = this.value.replace(/\s/g, '')"/>
       <input type="submit" value="login now" className="btn" name="submit"/>
       <p>don 't have an account?</p>
       <a href="user_register.php" className="option-btn">register now</a>
    </form>
</section>
    )
}