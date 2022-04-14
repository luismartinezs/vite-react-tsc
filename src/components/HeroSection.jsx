import HeroTitle from '@/components/HeroTitle'
import HeroSubtitle from '@/components/HeroSubtitle'
import ButtonList from '@/components/ButtonList'

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center py-20 md:max-w-5xl max-w-sm mx-auto text-center space-y-8">
      <HeroTitle />
      <HeroSubtitle />
      <ButtonList />
    </div>
  )
}
