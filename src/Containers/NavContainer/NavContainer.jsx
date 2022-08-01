import Nav from "../../Components/Navbar/Nav";
import Checkbox from "../../Components/Checkbox/Checkbox";

const NavContainer = ({ checkPh, checkAbv, checkClassic, checkSearch }) => {
  const filter = (e) => {
    if (e.target.id === "ph") {
      checkPh(e);
    }
    if (e.target.id === "abv") {
      checkAbv(e);
    }
    if (e.target.id === "classic") {
      checkClassic(e);
    }
  };
  return (
    <>
      <h1>Punk API</h1>
      <Nav checkSearch={checkSearch} />
      <Checkbox text="Classic Beers" id="classic" filter={filter} />
      <Checkbox text="High ABV" id="abv" filter={filter} />
      <Checkbox text="High Ph" id="ph" filter={filter} />
    </>
  );
};

export default NavContainer;
