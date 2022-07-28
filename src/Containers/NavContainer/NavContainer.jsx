import Nav from "../../Components/Navbar/Nav"
import Checkbox from "../../Components/Checkbox/Checkbox"

const NavContainer = ({checkPh, checkAbv, checkClassic, checkSearch}) => {

    return (
        <>
        <h1>Punk API</h1>
        <Nav onChange={checkSearch}/>
        <Checkbox text="Classic Beers" id="classic"/>
        <Checkbox text="High ABV" id="abv"/>
        <Checkbox text="High Ph" id="ph"/>
        </>
    )

}

export default NavContainer