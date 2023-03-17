export default function About(props){
    return(
     <>
     
<section className="about">

<div className="row">

   <div className="image">
      <img src="images/about-img.svg"/>
   </div>

   <div className="content">
      <h3>why choose us?</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam veritatis minus et similique doloribus? Harum molestias tenetur eaque illum quas? Obcaecati nulla in itaque modi magnam ipsa molestiae ullam consequuntur.</p>
      <a href="contact.php" className="btn">contact us</a>
   </div>

</div>

</section>

<section className="reviews">

<h1 className="heading">client s reviews</h1>

<div className="swiper reviews-slider">

<div className="swiper-wrapper">

   <div className="swiper-slide slide">
      <img src="images/pic-1.png" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore distinctio hic, iusto adipisci a rerum nemo perspiciatis fugiat sapiente.</p>
      <div className="stars">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star-half-alt"></i>
      </div>
      <h3>john deo</h3>
   </div>

   <div className="swiper-slide slide">
      <img src="images/pic-2.png" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore distinctio hic, iusto adipisci a rerum nemo perspiciatis fugiat sapiente.</p>
      <div className="stars">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star-half-alt"></i>
      </div>
      <h3>john deo</h3>
   </div>

   <div className="swiper-slide slide">
      <img src="images/pic-3.png"/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore distinctio hic, iusto adipisci a rerum nemo perspiciatis fugiat sapiente.</p>
      <div className="stars">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star-half-alt"></i>
      </div>
      <h3>john deo</h3>
   </div>

   <div className="swiper-slide slide">
      <img src="images/pic-4.png" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore distinctio hic, iusto adipisci a rerum nemo perspiciatis fugiat sapiente.</p>
      <div className="stars">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star-half-alt"></i>
      </div>
      <h3>john deo</h3>
   </div>

   <div className="swiper-slide slide">
      <img src="images/pic-5.png" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore distinctio hic, iusto adipisci a rerum nemo perspiciatis fugiat sapiente.</p>
      <div className="stars">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star-half-alt"></i>
      </div>
      <h3>john deo</h3>
   </div>

   <div className="swiper-slide slide">
      <img src="images/pic-6.png" alt=""/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore distinctio hic, iusto adipisci a rerum nemo perspiciatis fugiat sapiente.</p>
      <div className="stars">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star-half-alt"></i>
      </div>
      <h3>john deo</h3>
   </div>

</div>

<div className="swiper-pagination"></div>

</div>

</section>

     </>   
    )
}