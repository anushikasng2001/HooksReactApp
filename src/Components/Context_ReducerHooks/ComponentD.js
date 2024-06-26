import React, { useContext } from 'react'
import { CountContext } from '../../App'

function ComponentD() {
    const countContext = useContext(CountContext)
    return (
        <div>
            <h1>Component D - {countContext.countState}</h1>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentD
