import { useNavigate, useLocation } from 'react-router-dom'

const versions = [
  { id: 'version-1', name: 'Version 1', path: '/version-1' },
  { id: 'version-2', name: 'Version 2', path: '/version-2' },
  { id: 'version-3', name: 'Version 3', path: '/version-3' },
  { id: 'version-4', name: 'Version 4', path: '/version-4' },
]

export default function VersionSelector() {
  const navigate = useNavigate()
  const location = useLocation()

  const currentVersion = versions.find(v => location.pathname === v.path || location.pathname === '/') || versions[0]

  const handleChange = (e) => {
    const selectedVersion = versions.find(v => v.id === e.target.value)
    if (selectedVersion) {
      navigate(selectedVersion.path)
    }
  }

  return (
    <div className="flex items-center gap-3">
      <label htmlFor="version-select" className="text-sm font-semibold text-gray-700 whitespace-nowrap">
        Version:
      </label>
      <select
        id="version-select"
        value={currentVersion.id}
        onChange={handleChange}
        className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer hover:border-gray-400 transition-colors"
      >
        {versions.map((version) => (
          <option key={version.id} value={version.id}>
            {version.name}
          </option>
        ))}
      </select>
    </div>
  )
}

