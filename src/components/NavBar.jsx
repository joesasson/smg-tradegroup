import VersionSelector from './VersionSelector'

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            <img 
              src="/1709000445270.jpeg" 
              alt="SMG Trade Group Logo" 
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-900 font-bold tracking-tighter text-lg uppercase">
              SMG Trade Group
            </span>
            <span className="text-gray-500 text-sm">Showcase</span>
          </div>
        </div>
        <VersionSelector />
      </div>
    </nav>
  )
}

