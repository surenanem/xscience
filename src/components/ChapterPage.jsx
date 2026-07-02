import Notes from './Notes.jsx'
import Quiz from './Quiz.jsx'

export default function ChapterPage({ chapter, tab, onChangeTab }) {
  return (
    <div className="chapter-page">
      <header className="chapter-header">
        <p className="chapter-eyebrow">
          Chapter {chapter.number} · {chapter.subject}
        </p>
        <h2>{chapter.title}</h2>
      </header>

      <div className="tabs" role="tablist">
        <button
          role="tab"
          aria-selected={tab === 'notes'}
          className={`tab ${tab === 'notes' ? 'is-active' : ''}`}
          onClick={() => onChangeTab('notes')}
        >
          Notes
        </button>
        <button
          role="tab"
          aria-selected={tab === 'quiz'}
          className={`tab ${tab === 'quiz' ? 'is-active' : ''}`}
          onClick={() => onChangeTab('quiz')}
        >
          Quiz ({chapter.quiz.length})
        </button>
      </div>

      {/* key resets quiz/notes state when switching chapters */}
      {tab === 'notes' ? <Notes chapter={chapter} key={chapter.id + '-notes'} /> : <Quiz chapter={chapter} key={chapter.id + '-quiz'} />}
    </div>
  )
}
