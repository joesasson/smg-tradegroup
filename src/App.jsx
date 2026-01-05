import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import Version1 from './versions/Version1'
import Version2 from './versions/Version2'
import Version3 from './versions/Version3'
import Version4 from './versions/Version4'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full">
        <NavBar />
        <div className="pt-20 w-full version-content">
          <Routes>
            <Route path="/" element={<Navigate to="/version-1" replace />} />
            <Route path="/version-1" element={<Version1 />} />
            <Route path="/version-2" element={<Version2 />} />
            <Route path="/version-3" element={<Version3 />} />
            <Route path="/version-4" element={<Version4 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
