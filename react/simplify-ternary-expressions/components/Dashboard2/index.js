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

    if (error) {
        return <div>
            <h1>Dashboard</h1>
            <h2>Status: Ready</h2>
            <p>There was a problem with the network</p>
        </div>
    }

    if (!data) {
        return <div>
            <h1>Dashboard</h1>
            <h2>Status: loading...</h2>
            <p>Loading...</p>
        </div>
    }

    return <div>
        <h1>Dashboard</h1>
        <h2>Status: Ready</h2>
        {Object.keys(data).map(k => <p key={k}>{k}: {data[k]}</p>)}
    </div>
}