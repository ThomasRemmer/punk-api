const Checkbox = ({text, id}) => {
    return (
        <>
        <label htmlFor="">{text}</label>
        <input type="checkbox" id={id}/>
        </>
    )
}
export default Checkbox