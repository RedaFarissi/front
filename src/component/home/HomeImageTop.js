import images from '../images'
import {HomeImageTopItem} from '../index'

export default function HomeImageTop(props){
   const products = [
      {img:images.homeImg1,upto:"50",title:"smartphones"},
      {img:images.homeImg2,upto:"20",title:"watches"},
      {img:images.homeImg3,upto:"9",title:"headsets"}
   ]
   const all_products = products.map(e=> <HomeImageTopItem image={e.img} upto={e.upto} title={e.title}/>);
   
   return(
   <div className="home-bg border border-5">
      <section className="home">
         <div className="swiper home-slider">
            <div className="swiper-wrapper">
               {all_products}
            </div>
            <div className="swiper-pagination"></div>
         </div>
      </section>
   </div>
    )
}