import React, { useReducer } from 'react';
import countReducer, { initState } from "../redux/counter/reducer";
import { increase, decrease } from "../redux/counter/action";
export default function Counter() {

    const [count, dispath] = useReducer(countReducer, initState)
    return (
        <div>
            <h3>Counter</h3>
            <span>c{count} </span>
            <button onClick={() => dispath(increase())}>tang</button>
            <button onClick={() => dispath(decrease())}>giam</button>
        </div>
    )
}
