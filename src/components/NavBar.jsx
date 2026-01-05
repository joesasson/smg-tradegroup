import VersionSelector from './VersionSelector'

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rotate-45"></div>
          </div>
          <span className="text-gray-900 font-bold tracking-tighter text-lg uppercase">
            SMG Trade Group
          </span>
          <span className="text-gray-500 text-sm ml-2">Showcase</span>
        </div>
        <VersionSelector />
      </div>
    </nav>
  )
}

