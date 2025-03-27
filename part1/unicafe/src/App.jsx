import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const StatisticLine = ({ text, value }) => {
    if (text === 'positive')
        return (
            <tr>
                <td>{text}</td>
                <td>{value} %</td>
            </tr>
        )
    else
        return (
            <tr>
                <td>{text}</td>
                <td>{value}</td>
            </tr>
        )
}

const Statistics = ({ good, neutral, bad, text }) => {
    const all = good + bad + neutral
    const avg = Number((all / 3).toFixed(1))
    const positive = Number(((good / all) * 100).toFixed(1))
    if (positive || neutral || bad)
        return (
            <div>
                <h1>{text}</h1>
                <table>
                    <tbody>
                        <StatisticLine text="good" value={good} />
                        <StatisticLine text="neutral" value={neutral} />
                        <StatisticLine text="bad" value={bad} />
                        <StatisticLine text="all" value={all} />
                        <StatisticLine text="average" value={avg} />
                        <StatisticLine text="positive" value={positive} />
                    </tbody>
                </table>

            </div>
        )
    return (
        <div>
            <h1>{text}</h1>
            <p>No feedback given</p>
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