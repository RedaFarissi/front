export default function Cart(props){
    return(
    <section className="products shopping-cart">
        <h3 className="heading">shopping cart</h3>
        <div className="box-container">
            <form action="" method="post" className="box">
               <input type="hidden" name="cart_id" value="id"/>
               <a href="#" className="fas fa-eye"></a>
               <img src="uploaded_img/>" alt=""/>
               <div className="name"> name </div>
               <div className="flex">
                  <div className="price">$ price /-</div>
                  <input type="number" name="qty" className="qty" min="1" max="99" value=""/>
                  <button type="submit" className="fas fa-edit" name="update_qty"></button>
               </div>
               <div className="sub-total"> sub total : <span>$ /-</span> </div>
               <input type="submit" value="delete item"  className="delete-btn" name="delete"/>
            </form>
        </div>
        <div className="cart-total">
           <p>grand total : <span>$ /-</span></p>
           <a href="shop.php" className="option-btn">continue shopping</a>
           <a href="cart.php?delete_all" className="delete-btn">delete all item</a>
           <a href="checkout.php">proceed to checkout</a>
        </div>
    </section>
    )
}