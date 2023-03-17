export default function Shop(props){
    return(
    <section className="products">

        <h1 className="heading">latest products</h1>

        <div className="box-container">
            <form action="" method="post" className="box">
               <input type="hidden" name="pid" value="id"/>
               <input type="hidden" name="name" value=" name"/>
               <input type="hidden" name="price" value="price"/>
               <input type="hidden" name="image" value="image_01"/>
               <button className="fas fa-heart" type="submit" name="add_to_wishlist"></button>
               <a href="#" className="fas fa-eye"></a>
               <img src="uploaded_img/image_01"/>
               <div className="name">name</div>
               <div className="flex">
                  <div className="price"><span>$</span>price<span>/-</span></div>
                  <input type="number" name="qty" className="qty" min="1" max="99" value="1"/>
               </div>
               <input type="submit" value="add to cart" className="btn" name="add_to_cart"/>
            </form>
        </div>

    </section>
    )
}