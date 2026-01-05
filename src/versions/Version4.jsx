import { useEffect } from 'react'
import App from '../../smg-gemini-cursor/src/App.jsx'
import '../../smg-gemini-cursor/src/index.css'

export default function Version4() {
  useEffect(() => {
    // Scroll to top when version loads
    window.scrollTo(0, 0)
    
    // Refresh ScrollTrigger when component mounts
    const refreshScrollTrigger = () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.refresh()
      }
    }
    
    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(refreshScrollTrigger, 100)
    
    return () => {
      clearTimeout(timeoutId)
      // Cleanup ScrollTrigger instances on unmount
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
    }
  }, [])

  return <App />
}

