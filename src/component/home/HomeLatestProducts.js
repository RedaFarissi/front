export default function HomeLatestProducts(props){
    return(
<section className="home-products">
    <h1 className="heading">latest products</h1> 
    <div className="swiper products-slider">
        <div className="swiper-wrapper">
            <form action="" method="post" className="swiper-slide slide">
              <input type="hidden" name="pid" value=""/>
              <input type="hidden" name="name" value=""/>
              <input type="hidden" name="price" value=""/>
              <input type="hidden" name="image" value=""/>
              <button className="fas fa-heart" type="submit" name="add_to_wishlist"></button>
              <a href="#" className="fas fa-eye"></a>
              <img src="#" alt=""/>
              <div className="name">name</div>
              <div className="flex">
                 <div className="price"><span>$</span> <span>/-</span></div>
                 <input type="number" name="qty" className="qty" min="1" max="99" value="1"/>
              </div>
              <input type="submit" value="add to cart" className="btn" name="add_to_cart"/>
           </form>
        </div>
        <div className="swiper-pagination"></div>
    </div>
</section>
    )
}