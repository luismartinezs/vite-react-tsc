import GradientText from "@/components/GradientText";
import { useTheme } from "@/store/Theme";

const HeroTitle: React.FC = (): JSX.Element => {
  const theme = useTheme();

  const lightThemeTitle: JSX.Element = (
    <span>
      The
      <GradientText> Progressive </GradientText>
      <br />
      JavaScript Framework
    </span>
  );

  const darkThemeTitle: JSX.Element = (
    <>
      <GradientText>The Progressive</GradientText>
      <br />
      <GradientText>JavaScript Framework</GradientText>
    </>
  );

  return (
    <h1 className="leading-tight lg:leading-tight text-5xl lg:text-7xl font-black tracking-tight">
      {theme.darkMode ? darkThemeTitle : lightThemeTitle}
    </h1>
  );
};

export default HeroTitle;
