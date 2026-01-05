import { useEffect } from 'react'
import App from '../../smg-gemini-chat/smg-website/src/App.jsx'
import '../../smg-gemini-chat/smg-website/src/index.css'

export default function Version3() {
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

