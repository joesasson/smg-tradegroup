import { useEffect } from 'react'
import App from '../../cursor-claude/src/App.jsx'
import '../../cursor-claude/src/index.css'

export default function Version2() {
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

