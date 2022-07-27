import Card from "../../Components/Card/Card"

const CardContainer = ({beers}) => {


    return (
        <div className="profile-container">
            {beers.map((beer) => (
            <Card 
                id={beer.id} 
                name={beer.name} 
                tag={beer.tagline} 
                desc={beer.description} 
                img={beer.img_url} 
                abv={beer.abv} 
                ph={beer.ph} 
                date={beer.first_brewed} />
            ))}
        </div>
    )
}

export default CardContainer