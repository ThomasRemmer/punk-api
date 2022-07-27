import Card from "../../Components/Card/Card"

const CardContainer = ({beers}) => {

    const cards = beers.map((beer) => {
        return ( <div>
            <Card id={beer.id} name={beer.name} tag={beer.tagline} desc={beer.description} img={beer.img_url} abv={beer.abv} ph={beer.ph} date={beer.first_brewed} />
        </div>)
    })

    return (
        <div>{cards}</div>
    )
}

export default CardContainer