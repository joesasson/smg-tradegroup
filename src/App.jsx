import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import Version1 from './versions/Version1'
import Version2 from './versions/Version2'
import Version3 from './versions/Version3'
import Version4 from './versions/Version4'
import Version5 from './versions/Version5'

function AppContent() {
  const location = useLocation()

  useEffect(() => {
    const refreshScrollTrigger = () => {
      if (window.ScrollTrigger) {
        setTimeout(() => {
          window.ScrollTrigger.refresh()
        }, 150)
      }
    }
    refreshScrollTrigger()
  }, [location.pathname])

  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-20 version-content">
        <Routes>
          <Route path="/" element={<Navigate to="/version-1" replace />} />
          <Route path="/version-1" element={<Version1 />} />
          <Route path="/version-2" element={<Version2 />} />
          <Route path="/version-3" element={<Version3 />} />
          <Route path="/version-4" element={<Version4 />} />
          <Route path="/version-5" element={<Version5 />} />
        </Routes>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
