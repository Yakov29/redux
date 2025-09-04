import {useSelector} from "react-redux";
import {use} from "react";


const Counter = () => {

    const value = useSelector(state => state)
    return (
        <section className={"counter"}>
        <p className={"value"}>{value}</p>
        <button className={"button-add"}>+</button>
         <button className={"button-remove"}>-</button>
        </section>
)
}


export default Counter