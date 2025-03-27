import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const Statistics = ({ good, neutral, bad, text }) => {
    return (
        <div>
            <h1>{text}</h1>
            <p>
                good {good}<br />
                neutral {neutral}<br />
                bad {bad}
            </p>
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <Header text={"give feedback"} />
            <Button onClick={() => setGood(good + 1)} text="good" />
            <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
            <Button onClick={() => setBad(bad + 1)} text="bad" />
            <Statistics
                good={good} neutral={neutral} bad={bad}
                text={"statistics"}
            />
        </div>
    )
}

export default App