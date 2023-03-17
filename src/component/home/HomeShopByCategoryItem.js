export default function HomeShopByCategoryItem(props){
    return(
    <a href="#" className="swiper-slide slide">
        <img src={props.image}/>
        <h3>{props.title}</h3>
    </a>
    )
}