import WidthWrapper from '@/components/WidthWrapper'

export default function SectionWrapper({ children }) {
  return (
    <div className="py-16">
      <WidthWrapper>{children}</WidthWrapper>
    </div>
  )
}
