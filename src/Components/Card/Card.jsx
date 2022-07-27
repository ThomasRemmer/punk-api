import "./Card.scss"

const Card = ({name,tag,desc,img,abv,ph,date}) => {
   return ( <>
        <div className="Card">
            <p className="card__heading">{name}</p>
            <img src={img} alt="beer" className="card__image"/>
            <p className="card__heading">{tag}</p>
            <p className="card__content">{desc}</p>
            <p className="card__content">{date}</p>
            <p className="card__content">{ph}</p>
            <p className="card__content">{abv}</p>
        </div>
    </>
   )
}

export default Card