import { useRef, useState } from "react"
import Btn from "../components/Btn";
import Input from "../components/Input";
import Output from "../components/Output";


export const Greeting = () => {
    let last = useRef("");
    let first = useRef("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    let name = `${firstName} ${lastName}`
    function setName()
    {
        setFirstName(first.current);
        setLastName(last.current);
    }

    function setClear()
    {
        setFirstName("");
        setLastName("");
    }

    return (
        <div class = "container">
            <Output text = "First Name "/>
            <Input onChange = {event => {first.current = event.target.value;}}/>
            <Output text = "Last Name" />
            <Input onChange = {event => {last.current = event.target.value;}}/>
            <br/>
            <Btn text = "Greet" onClick = {setName}/>
            <Btn text = "Clear All" onClick = {setClear}/>
            <br/>
            <Output text = {"Welcome " + name}/>
        </div>
    )
}