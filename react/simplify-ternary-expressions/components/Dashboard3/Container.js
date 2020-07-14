import { useState, useEffect } from 'react'
import PresentationSuccess from './PresentationSuccess'
import PresentationError from './PresentationError'
import PresentationLoading from './PresentationLoading'

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
        return <PresentationError />
    }

    if (!data) {
        return <PresentationLoading />
    }

    return <PresentationSuccess data={data} />
}