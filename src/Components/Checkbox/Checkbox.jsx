const Checkbox = ({text, id, filter}) => {
    return (
        <>
        <label htmlFor="">{text}</label>
        <input type="checkbox" id={id} onChange={filter}/>
        </>
    )
}
export default Checkbox