import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import {use} from "react";


const Counter = () => {

    const value = useSelector(state => state)
    const dispatch = useDispatch()

    const addNumber = () => {
        dispatch({
            type: "newNumber",
            payload: 5
        })
    }

    const removeNumber = () => {
        dispatch({
            type: "oldNumber",
            payload: 4
        })
    }
    return (
        <section className={"counter"}>
        <p className={"value"}>{value}</p>
        <button onClick={addNumber} className={"button-add"}>+</button>
         <button onClick={removeNumber} className={"button-remove"}>-</button>
        </section>
)
}


export default Counter
