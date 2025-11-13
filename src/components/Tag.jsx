export default function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500/10 to-sky-500/10 text-indigo-700 dark:text-indigo-200 ring-1 ring-inset ring-indigo-500/20 px-3 py-1 text-sm font-medium mr-2 mb-2">
      {children}
    </span>
  )
}
