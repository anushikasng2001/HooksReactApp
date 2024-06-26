import React, { useEffect, useState } from 'react'

function EHooksCounterOne() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    
    useEffect(() => {
        console.log('useEffect updating component')
        document.title = `Clicked ${count} times`
    }, [count])
  return (
    <div>
        <input type='text' value={name} onChange={event => setName(event.target.value)}/>
        <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  )
}

export default EHooksCounterOne
