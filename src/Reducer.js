import React from 'react'
import { useReducer } from 'react'
const conunterReducer =(state,action) => {
    switch(action.type){
        case 'INCREMENT':
        return {count: state.count + 2.5};
        case 'DECREMENT':
            return {count: state.count - 0.25};
        default:
                return state;
    }
};
export default function Reducer() {
    const [state,dispatch]=useReducer(conunterReducer, { count: 0});
  return (
    <div>
        <p>count: {state.count}</p>
        <button onClick={()=> dispatch({type: 'INCREMENT'})}>add</button>
        <button onClick={()=> dispatch({type: 'DECREMENT'})}>sub</button>
    </div>
  )
}
