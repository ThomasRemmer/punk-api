import { useState, useEffect } from "react";
import "./App.scss";
import NavContainer from "./Containers/NavContainer/NavContainer";
import CardContainer from "./Containers/CardContainer/CardContainer";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [ph, setPh] = useState(false);
  const [classic, setClassic] = useState("");
  const [abv, setAbv] = useState("");
  const [input, setInput] = useState("");

  const getBeers = async () => {
    let query = `${input}&${abv}&${classic}&`;
    const url = `https://api.punkapi.com/v2/beers?&${query}&per_page=80`;
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
  };

  useEffect(() => {
    getBeers(ph, classic, abv, input);
  }, [ph, classic, abv, input]);

  const handlePh = (e) => {
    let beerArr = beers;
    if (e.target.checked === true) {
      let filterArr = beerArr.filter((beer) => beer.ph < 4);
      setBeers(filterArr);
    } else {
      getBeers();
    }
  };

  const handleAbv = (e) => {
    if (e.target.checked === true) {
      setAbv("abv_gt=6");
    } else setAbv("");
  };

  const handleClassic = (e) => {
    if (e.target.checked === true) {
      setClassic("brewed_before=01/2010");
    } else setClassic("");
  };

  const handleInput = (e) => {
    if (e.target.value !== "") {
      setInput(`beer_name=${e.target.value}`);
    } else {
      setInput("");
    }
  };

  console.log(beers);
  return (
    <>
      <nav>
        <NavContainer
          checkPh={handlePh}
          checkAbv={handleAbv}
          checkClassic={handleClassic}
          checkSearch={handleInput}
        />
      </nav>
      <main>
        <CardContainer beers={beers} />
      </main>
    </>
  );
};

export default App;
