export default function Notes({ chapter }) {
  const { notes } = chapter

  return (
    <div className="notes">
      <p className="notes-intro">{notes.intro}</p>

      {notes.sections.map((section, i) => (
        <section className="notes-section" key={i}>
          <h3>{section.heading}</h3>
          <ul>
            {section.points.map((point, j) => (
              <li key={j}>{point}</li>
            ))}
          </ul>
        </section>
      ))}

      {notes.keyTerms?.length > 0 && (
        <section className="notes-section notes-terms">
          <h3>Key Terms</h3>
          <dl>
            {notes.keyTerms.map((kt, i) => (
              <div className="notes-term" key={i}>
                <dt>{kt.term}</dt>
                <dd>{kt.definition}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}
    </div>
  )
}
