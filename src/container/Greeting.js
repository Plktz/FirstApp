import { useRef, useState } from "react"
import Btn from "../components/Btn";
import Input from "../components/Input";
import Output from "../components/Output";

export const Greeting = () => {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [name, setName] = useState("");

    let fullName = `${first} ${last}`

    function fixCase(str) {
        if(str.length === 0)
        {   
            return str;
        }
        else{
            return str[0].toUpperCase() + str.substring(1).toLowerCase();
        }
    }

    function updateName() {
        fullName = fixCase(first) + " " + fixCase(last);

        setName(fullName);
    }

    function setClear() {
        setFirst("");
        setLast("");
        setName("");
    }
    return (
        <div className="text-center">
            <Output text="First Name " />
            <Input text = {first} onChange={event => { setFirst(event.target.value); }} />
            <Output text="Last Name" />
            <Input text = {last} onChange={event => { setLast(event.target.value) }} />
            <br />
            <Btn text="Greet" onClick={updateName} />
            <Btn text="Clear All" onClick={setClear} />
            <br />
            <Output text={"Welcome " + name} />
        </div>
    )
}