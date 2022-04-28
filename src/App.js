import { useState } from 'react'

const Button = ({text, handleClick}) => (
  <button onClick={handleClick}>{text}</button>
)

const Display = ({text}) => <p>{text}</p>

const Heading = ({text}) => <h1>{text}</h1>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const [selected, setSelected] = useState(0)

  const setRandomQuote = () => {
    let randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const incrementVote = () => {
    let votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }

  const mostVotes = () => {
    let largestVoteCount = Math.max(...votes)
    return votes.indexOf(largestVoteCount)
  }

  return (
    <div>
      <Heading text="Anecdote of the day" />
      <Display text={anecdotes[selected]} />
      <Display text={"has " + String(votes[selected]) + " votes"} />
      <Button text="vote" handleClick={() => incrementVote()} />
      <Button text="next anecdote" handleClick={() => setRandomQuote()} />
      <Heading text="Anecdote with most votes" />
      <Display text={anecdotes[mostVotes()]} />
      <Display text={"has " + String(votes[mostVotes()]) + " votes"} />
    </div>
  )
}

export default App