import { useEffect } from 'react'
import App from '../../cursor-claude/src/App.jsx'
import '../../cursor-claude/src/index.css'

export default function Version2() {
  useEffect(() => {
    // Scroll to top when version loads
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ paddingTop: '80px' }}>
      <App />
    </div>
  )
}

