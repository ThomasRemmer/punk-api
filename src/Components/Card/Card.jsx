

const Card = (id,name,tag,desc,img,abv,ph,date) => {
    <>
        <p>{name}</p>
        <img src={img} alt="beer" />
        <p>{tag}</p>
        <p>{desc}</p>
        <p>{date}</p>
        <p>{ph}</p>
        <p>{abv}</p>
    </>
}

export default Card