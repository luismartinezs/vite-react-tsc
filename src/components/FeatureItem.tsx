export default function FeatureItem({ title, children }) {
  return (
    <div>
      <h2 className="font-semibold text-xl dark:text-gray-200">{title}</h2>
      <p className="text-sm text-gray-500 mt-4 leading-relaxed tracking-wide dark:text-gray-200">
        {children}
      </p>
    </div>
  )
}
