import {setState} from "react";
import './App.css';
import NavContainer from "./Containers/NavContainer/NavContainer";
import CardContainer from "./Containers/CardContainer/CardContainer";
const [beers,setBeers] = setState("")

const getBeers = async () => {
  const url = "https://api.punkapi.com/v2/beers/";
  const res = await fetch(url);
  const data = await res.json();
  setBeers(data.results);
};

const App =() => {
  return (
      <>
      <nav>

      </nav>
      <main>
        
      </main>
      </>
  );
}

export default App;
