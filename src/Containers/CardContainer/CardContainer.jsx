import Card from "../../Components/Card/Card";
import "./CardContainer.scss";

const CardContainer = ({ beers }) => {
  return (
    <div className="card-container">
      {beers.map((beer) => (
        <Card
          key={beer.id}
          name={beer.name}
          tag={beer.tagline}
          desc={beer.description}
          img={beer.image_url}
          abv={beer.abv}
          ph={beer.ph}
          date={beer.first_brewed}
        />
      ))}
    </div>
  );
};

export default CardContainer;
