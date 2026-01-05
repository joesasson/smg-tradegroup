import { useEffect } from 'react'
import App from '../../Cursor-Auto/src/App.jsx'
import '../../Cursor-Auto/src/index.css'

export default function Version1() {
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

