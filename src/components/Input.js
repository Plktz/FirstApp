
const Input = (props) => {

    return(
        <>
            <input value={props.text} onChange = {props.onChange}></input>
        </>
    )
}


export default Input;