export default function HomeImageTopItem(props){
    return(
    <div className="swiper-slide slide">
        <div className="image">
            <img src={props.image}/>
        </div>
        <div className="content">
            <span>upto {props.upto}% </span>
            <h3> latest {props.title}</h3>
            <a href="/shop" className="btn">shop now</a>
        </div>
    </div>
    )
}