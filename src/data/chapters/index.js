import jesc101 from './jesc101.js'
import jesc102 from './jesc102.js'
import jesc103 from './jesc103.js'
import jesc104 from './jesc104.js'
import jesc105 from './jesc105.js'
import jesc106 from './jesc106.js'
import jesc107 from './jesc107.js'
import jesc108 from './jesc108.js'
import jesc109 from './jesc109.js'
import jesc110 from './jesc110.js'
import jesc111 from './jesc111.js'
import jesc112 from './jesc112.js'
import jesc113 from './jesc113.js'

export const chapters = [
  jesc101,
  jesc102,
  jesc103,
  jesc104,
  jesc105,
  jesc106,
  jesc107,
  jesc108,
  jesc109,
  jesc110,
  jesc111,
  jesc112,
  jesc113,
]

export const chaptersById = Object.fromEntries(chapters.map((c) => [c.id, c]))

export const subjectOrder = ['Chemistry', 'Physics', 'Biology']

export function chaptersBySubject() {
  const groups = {}
  for (const subject of subjectOrder) groups[subject] = []
  for (const chapter of chapters) {
    if (!groups[chapter.subject]) groups[chapter.subject] = []
    groups[chapter.subject].push(chapter)
  }
  return groups
}
