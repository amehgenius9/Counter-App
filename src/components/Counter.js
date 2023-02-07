import { useState } from "react";
import Button1 from "./Increase";
import Button2 from "./Decrease";
import './Counter.css'


export default function Counter () {
    const [count, setCount] = useState(0)

    const increaseHandler = () => {
        setCount(count + 1);
    }

    const decreaseHandler = () => {
        setCount(count - 1);
    }

    return (
        <div className="wrapper">
            <div className="content">
            <h1 className="headerStyle">Counter App</h1>
            <h1>{count}</h1>
            <Button1 click1 = {increaseHandler}/>
            <Button2 click2 = {decreaseHandler}/>
            </div>
        </div>
    );
}