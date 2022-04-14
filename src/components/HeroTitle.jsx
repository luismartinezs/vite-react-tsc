import GradientText from '@/components/GradientText'
import { useTheme } from '@/store/Theme'

export default function HeroTitle() {
  const theme = useTheme()

  const lightThemeTitle = (
    <span>
      The
      <GradientText> Progressive </GradientText>
      <br />
      JavaScript Framework
    </span>
  )

  const darkThemeTitle = (
    <>
      <GradientText>The Progressive</GradientText>
      <br />
      <GradientText>JavaScript Framework</GradientText>
    </>
  )

  return (
    <h1 className="leading-tight lg:leading-tight text-5xl lg:text-7xl font-black tracking-tight">
      {theme.darkMode ? darkThemeTitle : lightThemeTitle}
    </h1>
  )
}
