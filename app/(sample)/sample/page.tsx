'use client'

import { useState } from 'react';

export default function Sample() {
    const initialCandies = ['snickers', 'skittles', 'twix', 'milky way']
    const [candies, setCandies] = useState(initialCandies)
    const dispense = (candy: string) => {
        setCandies(allCandies => allCandies.filter(c => c !== candy))
    }
    return (
        <div>
            <h1>Candy Dispenser</h1>
            <div>
                <div>Available Candy</div>
                {candies.length === 0 ? (
                    <button onClick={() => setCandies(initialCandies)}>refill</button>
                ) : (
                    <ul>
                        {candies.map(candy => (
                            <li key={candy}>
                                <button onClick={() => dispense(candy)}>grab</button> {candy}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}