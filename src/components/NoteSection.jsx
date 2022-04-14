export default function NoteSection() {
  return (
    <div className="py-4 flex justify-center items-center text-xs text-gray-700 font-medium dark:text-gray-200">
      Special sponsor
      <img
        className="h-10 inline mx-6 hue-rotate-90 dark:invert dark:saturate-0"
        src="https://vuejs.org/images/sponsors/hbuilder.avif"
        alt="HBuilder"
      />
      Advanced IDE for React
    </div>
  )
}
