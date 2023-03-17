export default function Wishlist(props){
    return(
    <section className="products">
        <h3 className="heading">your wishlist</h3>
        <div className="box-container">
            <form action="" method="post" className="box">
               <input type="hidden" name="pid" value=""/>
               <input type="hidden" name="wishlist_id" value=""/>
               <input type="hidden" name="name" value=""/>
               <input type="hidden" name="price" value=""/>
               <input type="hidden" name="image" value=""/>
               <a href="#" className="fas fa-eye"></a>
               <img src="#" />
               <div className="name">name</div>
               <div className="flex">
                  <div className="price">$ price/-</div>
                  <input type="number" name="qty" className="qty" min="1" max="99" value="1"/>
               </div>
               <input type="submit" value="add to cart" className="btn" name="add_to_cart"/>
               <input type="submit" value="delete item" className="delete-btn" name="delete"/>
            </form>
            <p className="empty">your wishlist is empty</p>
        </div>
        <div className="wishlist-total">
           <p>grand total : <span>$ /-</span></p>
           <a href="shop.php" className="option-btn">continue shopping</a>
           <a href="wishlist.php?delete_all" className="delete-btn">delete all item</a>
        </div>
    </section>
    )
}