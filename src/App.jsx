import {setState, useEffect} from "react";
import './App.css';
import NavContainer from "./Containers/NavContainer/NavContainer";
import CardContainer from "./Containers/CardContainer/CardContainer";
const [beers,setBeers] = setState("")
const [ph,setPh] = setState(false)
const [classic,setClassic] = setState("")
const [abv,setAbv] = setState("")
const [input, setInput] =setState("")

const getBeers = async () => {
  const url = "https://api.punkapi.com/v2/beers/";
  const res = await fetch(url);
  const data = await res.json();
  setBeers(data.results);
};

useEffect(() => { getBeers(); }, [ph, classic, abv, input]);

const handlePh = (e) => {
  if (e.target.checked === true){
    setPh(true)
  } else {
    setPh(false)
  }
}

const handleAbv = (e) => {
  if (e.target.checked === true){
    setAbv("abv_gt=6")
  }
}

const handleClassic = (e) => {
  if (e.target.checked === true){
    setClassic("brewed_beffore=01/2010")
  }
}

const handleInput = (e) => {
  if (e.target.value !== "") {
    setInput(`beer_name=${e.target.value}`)
  }
}

const App =() => {
  return (
      <>
      <nav>
        <NavContainer />
      </nav>
      <main>
        <CardContainer />
      </main>
      </>
  );
}

export default App;
