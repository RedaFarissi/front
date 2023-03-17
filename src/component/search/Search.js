export default function Search(props){
    return(
        <>
    <section className="search-form mt-5">
       <form action="" method="post">
          <input type="text" name="search_box" placeholder="search here..." maxlength="100" className="box" required/>
          <button type="submit" className="fas fa-search" name="search_btn"></button>
       </form>
    </section>
        
    <section className="products mb-5" style={{paddingTop:"0"}}>
        <div className="box-container">
            <form method="post" className="box">
               <input type="hidden" name="pid" value="id"/>
               <input type="hidden" name="name" value=" name"/>
               <input type="hidden" name="price" value="price"/>
               <input type="hidden" name="image" value="image_01"/>
               <button className="fas fa-heart" type="submit" name="add_to_wishlist"></button>
               <a href="#" className="fas fa-eye"></a>
               <img src="image_01" alt=""/>
               <div className="name">name</div>
               <div className="flex">
                  <div className="price"><span>$</span> price <span>/-</span></div>
                  <input type="number" name="qty" className="qty" min="1" max="99" value="1"/>
               </div>
               <input type="submit" value="add to cart" className="btn" name="add_to_cart"/>
            </form>
            <p className="empty">no products found!</p>
        </div>
    </section>
    </>
    )
}