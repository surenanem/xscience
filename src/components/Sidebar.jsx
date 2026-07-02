import { subjectOrder, chaptersBySubject } from '../data/chapters/index.js'

export default function Sidebar({ activeChapterId, onSelectChapter, onGoHome, open, onClose }) {
  const groups = chaptersBySubject()

  return (
    <>
      <div className={`sidebar-backdrop ${open ? 'is-open' : ''}`} onClick={onClose} />
      <nav className={`sidebar ${open ? 'is-open' : ''}`} aria-label="Chapter menu">
        <button className="sidebar-home" onClick={onGoHome}>
          <span className="sidebar-home-icon" aria-hidden="true">⌂</span>
          Class 10 Science
        </button>
        {subjectOrder
          .filter((subject) => groups[subject]?.length)
          .map((subject) => (
            <div className="sidebar-group" key={subject}>
              <h3 className="sidebar-group-title">{subject}</h3>
              <ul className="sidebar-list">
                {groups[subject].map((chapter) => (
                  <li key={chapter.id}>
                    <button
                      className={`sidebar-item ${chapter.id === activeChapterId ? 'is-active' : ''}`}
                      onClick={() => onSelectChapter(chapter.id)}
                    >
                      <span className="sidebar-item-number">{chapter.number}</span>
                      <span className="sidebar-item-title">{chapter.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </nav>
    </>
  )
}
