const Nav = ({checkSearch}) => {
    return (
        <>
        <label name="Search">Search</label>
        <input type="text" name="Search" id="search"  onChange={checkSearch}/>
        </>
    )

}

export default Nav