import { useEffect, useState } from 'react'

function parseHash() {
  const raw = window.location.hash.replace(/^#\/?/, '')
  if (!raw) return { chapterId: null, tab: 'notes' }
  const [chapterId, tab] = raw.split('/')
  return { chapterId: chapterId || null, tab: tab === 'quiz' ? 'quiz' : 'notes' }
}

export function useHashRoute() {
  const [route, setRoute] = useState(parseHash)

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const navigate = (chapterId, tab = 'notes') => {
    window.location.hash = chapterId ? `/${chapterId}/${tab}` : '/'
  }

  return { ...route, navigate }
}
