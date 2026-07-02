import { useState } from 'react'

export default function Quiz({ chapter }) {
  const questions = chapter.quiz
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState(() => Array(questions.length).fill(null))
  const [finished, setFinished] = useState(false)

  const question = questions[index]
  const selected = answers[index]
  const answered = selected !== null

  const score = answers.filter((a, i) => a === questions[i].correctIndex).length

  function selectOption(optionIndex) {
    if (answered) return
    const next = [...answers]
    next[index] = optionIndex
    setAnswers(next)
  }

  function goNext() {
    if (index < questions.length - 1) {
      setIndex(index + 1)
    } else {
      setFinished(true)
    }
  }

  function retry() {
    setAnswers(Array(questions.length).fill(null))
    setIndex(0)
    setFinished(false)
  }

  if (finished) {
    return (
      <div className="quiz">
        <div className="quiz-results">
          <h3>Quiz complete</h3>
          <p className="quiz-score">
            You scored <strong>{score}</strong> out of <strong>{questions.length}</strong>
          </p>
          <button className="btn btn-primary" onClick={retry}>
            Retry quiz
          </button>
        </div>

        <div className="quiz-review">
          <h3>Review</h3>
          {questions.map((q, i) => {
            const chosen = answers[i]
            const isCorrect = chosen === q.correctIndex
            return (
              <div className="quiz-review-item" key={i}>
                <p className="quiz-review-question">
                  <span className={`quiz-badge ${isCorrect ? 'is-correct' : 'is-incorrect'}`}>
                    {isCorrect ? 'Correct' : 'Incorrect'}
                  </span>
                  {i + 1}. {q.question}
                </p>
                <ul className="quiz-options quiz-options-review">
                  {q.options.map((opt, oi) => (
                    <li
                      key={oi}
                      className={
                        'quiz-option' +
                        (oi === q.correctIndex ? ' is-correct' : '') +
                        (oi === chosen && oi !== q.correctIndex ? ' is-incorrect' : '')
                      }
                    >
                      <span className="quiz-option-text">{opt}</span>
                      <span className="quiz-option-explain">{q.explanations[oi]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="quiz">
      <div className="quiz-progress">
        Question {index + 1} of {questions.length}
        <span className="quiz-progress-score">Score: {score}</span>
      </div>
      <div className="quiz-progress-bar">
        <div
          className="quiz-progress-bar-fill"
          style={{ width: `${((index + (answered ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>

      <p className="quiz-question">{question.question}</p>

      <ul className="quiz-options">
        {question.options.map((opt, oi) => {
          let stateClass = ''
          if (answered) {
            if (oi === question.correctIndex) stateClass = 'is-correct'
            else if (oi === selected) stateClass = 'is-incorrect'
          }
          return (
            <li key={oi}>
              <button
                className={`quiz-option-btn ${stateClass}`}
                onClick={() => selectOption(oi)}
                disabled={answered}
              >
                <span className="quiz-option-letter">{String.fromCharCode(65 + oi)}</span>
                <span className="quiz-option-text">{opt}</span>
              </button>
              {answered && (oi === selected || oi === question.correctIndex) && (
                <p className={`quiz-feedback ${oi === question.correctIndex ? 'is-correct' : 'is-incorrect'}`}>
                  {question.explanations[oi]}
                </p>
              )}
            </li>
          )
        })}
      </ul>

      {answered && (
        <button className="btn btn-primary" onClick={goNext}>
          {index < questions.length - 1 ? 'Next question' : 'See results'}
        </button>
      )}
    </div>
  )
}
