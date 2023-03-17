export default function UpdateUser(props){
    return(
    <section className="form-container">

       <form method="post">
          <h3>update now</h3>
          <input type="hidden" name="prev_pass" value="password"/>
          <input type="text" name="name" required placeholder="enter your username" maxlength="20" className="box" value=""/>
          <input type="email" name="email" required placeholder="enter your email" maxlength="50"  className="box" onInput="this.value = this.value.replace(/\s/g, '')" value="email/"/>
          <input type="password" name="old_pass" placeholder="enter your old password" maxlength="20"  className="box" onInput="this.value = this.value.replace(/\s/g, '')"/>
          <input type="password" name="new_pass" placeholder="enter your new password" maxlength="20"  className="box" onInput="this.value = this.value.replace(/\s/g, '')"/>
          <input type="password" name="cpass" placeholder="confirm your new password" maxlength="20"  className="box" oniIput="this.value = this.value.replace(/\s/g, '')"/>
          <input type="submit" value="update now" className="btn" name="submit"/>
       </form>

    </section>
    )
}