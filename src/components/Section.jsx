export default function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
        {title}
      </h2>
      <div className="space-y-4 text-gray-700 dark:text-gray-300">{children}</div>
    </section>
  )
}
