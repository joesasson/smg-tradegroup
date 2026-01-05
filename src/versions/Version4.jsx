import { useEffect } from 'react'
import App from '../../smg-gemini-cursor/src/App.jsx'
import '../../smg-gemini-cursor/src/index.css'

export default function Version4() {
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

