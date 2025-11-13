import { ExternalLink } from 'lucide-react'

export default function IconLink({ href, icon: Icon, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
    >
      <Icon size={18} className="opacity-80 group-hover:opacity-100" />
      <span className="border-b border-transparent group-hover:border-current">{children}</span>
      <ExternalLink size={16} className="opacity-0 -ml-1 group-hover:opacity-60 transition-opacity" />
    </a>
  )
}
