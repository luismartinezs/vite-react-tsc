import HeroSection from '@/components/HeroSection'
import HeaderSection from '@/components/HeaderSection'
import LineSpacer from '@/components/LineSpacer'
import NoteSection from '@/components/NoteSection'
import FeatureSection from '@/components/FeatureSection'
import BarSection from '@/components/BarSection'
import ThemeProvider from '@/store/Theme'

function App(): JSX.Element {
  const headerHeight: number = 54
  const barHeight: number = 24

  return (
    <ThemeProvider>
      <div className="font-base text-gray-700 overflow-x-hidden bg-white dark:bg-gray-800 transition duration-300">
        <BarSection barHeight={barHeight} />
        <HeaderSection headerHeight={headerHeight} offsetTop={barHeight} />
        <main style={{ paddingTop: headerHeight + barHeight }}>
          <HeroSection />
          <LineSpacer />
          <NoteSection />
          <LineSpacer />
          <FeatureSection />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
