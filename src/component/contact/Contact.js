export default function Contact(props){
    return(
    <section className="contact">
       <form method="post">
          <h3>get in touch</h3>
          <input type="text" name="name" placeholder="enter your name" required maxlength="20" className="box"/>
          <input type="email" name="email" placeholder="enter your email" required maxlength="50" className="box"/>
          <input type="number" name="number" min="0" max="9999999999" placeholder="enter your number" required  className="box"/>
          <textarea name="msg" className="box" placeholder="enter your message" cols="30" rows="10"></textarea>
          <input type="submit" value="send message" name="send" className="btn"/>
       </form>
    </section>
    )
}