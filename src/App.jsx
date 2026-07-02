import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import ChapterPage from './components/ChapterPage.jsx'
import { chapters, chaptersById, subjectOrder, chaptersBySubject } from './data/chapters/index.js'
import { useHashRoute } from './hooks/useHashRoute.js'
import './App.css'

function Home({ onSelectChapter }) {
  const groups = chaptersBySubject()
  return (
    <div className="home">
      <header className="home-header">
        <h1>Class 10 Science</h1>
        <p>
          Study notes and practice quizzes for all {chapters.length} chapters, with instant, explained
          feedback on every answer.
        </p>
      </header>

      {subjectOrder
        .filter((subject) => groups[subject]?.length)
        .map((subject) => (
          <section className="home-group" key={subject}>
            <h2>{subject}</h2>
            <div className="home-grid">
              {groups[subject].map((chapter) => (
                <button className="home-card" key={chapter.id} onClick={() => onSelectChapter(chapter.id)}>
                  <span className="home-card-number">Chapter {chapter.number}</span>
                  <span className="home-card-title">{chapter.title}</span>
                  <span className="home-card-meta">{chapter.quiz.length} quiz questions</span>
                </button>
              ))}
            </div>
          </section>
        ))}
    </div>
  )
}

function App() {
  const { chapterId, tab, navigate } = useHashRoute()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const chapter = chapterId ? chaptersById[chapterId] : null

  function selectChapter(id) {
    navigate(id, 'notes')
    setSidebarOpen(false)
  }

  function goHome() {
    navigate(null)
    setSidebarOpen(false)
  }

  return (
    <div className="app-shell">
      <header className="app-topbar">
        <button className="menu-toggle" onClick={() => setSidebarOpen((v) => !v)} aria-label="Toggle chapter menu">
          <span />
          <span />
          <span />
        </button>
        <button className="app-brand" onClick={goHome}>
          Class 10 Science
        </button>
      </header>

      <div className="app-body">
        <Sidebar
          activeChapterId={chapterId}
          onSelectChapter={selectChapter}
          onGoHome={goHome}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="app-main">
          {chapter ? (
            <ChapterPage chapter={chapter} tab={tab} onChangeTab={(t) => navigate(chapter.id, t)} />
          ) : (
            <Home onSelectChapter={selectChapter} />
          )}
        </main>
      </div>
    </div>
  )
}

export default App
