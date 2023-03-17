export default function Orders(props){
    return (
    <section className="orders mb-5 mt-5">
       <h1 className="heading">placed orders</h1>
       <div className="box-container">
            <div className="box">
               <p>placed on : <span></span></p>
               <p>name : <span></span></p>
               <p>email : <span></span></p>
               <p>number : <span></span></p>
               <p>address : <span></span></p>
               <p>payment method : <span></span></p>
               <p>your orders : <span>  </span></p>
               <p>total price : <span>$ /-</span></p>
               <p> payment status : <span></span> </p>
            </div>
       </div>
    </section>
    )
}