import {setState} from "react";
import './App.css';

const [beers,setBeers] = setState("")

const getBeers = async () => {
  const url = "https://api.punkapi.com/v2/beers/";
  const res = await fetch(url);
  const data = await res.json();
  getBeers(data.results);
};

const App =() => {
  return (
      <h1>hello word</h1>
  );
}

export default App;
