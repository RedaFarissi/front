import images from "../images"
import {HomeShopByCategoryItem} from '../index'

export default function HomeShopByCategory(props){
    var all_category = [
      {src:images.icon1 , title:"laptop"} ,{src:images.icon2 , title:"tv"} ,
      {src:images.icon3 , title:"camera"} ,{src:images.icon4 , title:"mouse"} ,
      {src:images.icon5 , title:"fridge"} ,{src:images.icon6 , title:"washing machine"} ,
      {src:images.icon7 , title:"smartphone"} ,{src:images.icon8 , title:"watch"} ,
    ]
    const result = all_category.map(e=><HomeShopByCategoryItem image={e.src} title={props.title}/>)
    return(
    <section className="category">
        <h1 className="heading">shop by category</h1>
        
        <div className="swiper category-slider">
            <div className="swiper-wrapper">
              {result}
            </div>
            <div className="swiper-pagination"></div>
        </div>
    </section>
    )
}