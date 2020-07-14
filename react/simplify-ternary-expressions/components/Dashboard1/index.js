import { useState, useEffect } from 'react'

const rollDice = () => Math.floor(Math.random() * 6) + 1
const diceIsAbove = n => rollDice() > n
const errorOnDiceRoll = n => {
    if (diceIsAbove(n)) {
        throw new Error('error')
    }
}


export default () => {
    const [data, updateData] = useState(false)
    const [error, updateError] = useState(false)

    useEffect(() => {
        try {
            errorOnDiceRoll(2)
            fetch('https://swapi.dev/api/people/1')
                .then(x => x.json())
                .then(x => updateData(x))
        } catch (e) {
            updateError(e)
        }
    }, [])

    return <div>
        <h1>Dashboard</h1>
        <h2>Status: {!data && !error ? 'loading...' : 'Ready'}</h2>
        <p>{error ? 'There was a problem with the network' : 'Api Data: '}</p>
        {Object.keys(data).map(k => <p key={k}>{k}: {data[k]}</p>)}
    </div>
}