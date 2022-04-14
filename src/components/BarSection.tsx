type BarSectionProps = {
  barHeight: number
}

export default function BarSection({ barHeight = 30 }: BarSectionProps): JSX.Element {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-10 bg-primary-500"
      style={{ height: barHeight }}
    >
      <div className="h-full text-white text-xs font-semibold tracking-wide text-center flex items-center justify-center">
        React 18 is now the new default version!&nbsp;
        <a className="underline" href="/">
          Learn more
        </a>
      </div>
    </div>
  )
}
