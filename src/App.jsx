import {useState, useEffect} from "react";
import './App.scss';
import NavContainer from "./Containers/NavContainer/NavContainer";
import CardContainer from "./Containers/CardContainer/CardContainer";


const App =() => {

  const [beers,setBeers] = useState([])
  const [ph,setPh] = useState(false)
  const [classic,setClassic] = useState("")
  const [abv,setAbv] = useState("")
  const [input, setInput] =useState("")
  
  const getBeers = async () => {
    // let query =`${classic}&${abv}&${input}`
    const url = `https://api.punkapi.com/v2/beers/`;
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
  
  };
  
  useEffect(() => {
    getBeers(ph, classic, abv, input);
  }, [ph, classic, abv, input]);
  
  
  // const handlePh = (e) => {
  //   if (e.target.checked === true){
  //     setPh(true)
  //   } else {
  //     setPh(false)
  //   }
  // }
  
  // const handleAbv = (e) => {
  //   if (e.target.checked === true){
  //     setAbv("abv_gt=6")
  //   }
  // }
  
  // const handleClassic = (e) => {
  //   if (e.target.checked === true){
  //     setClassic("brewed_beffore=01/2010")
  //   }
  // }
  
  // const handleInput = (e) => {
  //   if (e.target.value !== "") {
  //     setInput(`beer_name=${e.target.value}`)
  //   }
  // }
  
  console.log(beers)
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
