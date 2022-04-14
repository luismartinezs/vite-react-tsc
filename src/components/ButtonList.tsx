import BaseButton from '@/components/BaseButton.jsx'
// eslint-disable-next-line import/no-unresolved
import IconPlayCircleFilled from '~icons/mdi/play-circle-filled'
// eslint-disable-next-line import/no-unresolved
import IconArrowRight from '~icons/mdi/arrow-right'

export default function ButtonList() {
  return (
    <ul className="flex space-x-4">
      <li>
        <BaseButton type="button" btnStyle="primary">
          <IconPlayCircleFilled className="mr-1 w-6 h-6" />
          Why React
        </BaseButton>
      </li>
      <li>
        <BaseButton btnStyle="secondary">
          Get Started
          <IconArrowRight className="transition-transform ml-1 w-4 h-4 group-hover:translate-x-1" />
        </BaseButton>
      </li>
      <li>
        <BaseButton btnStyle="secondary">Install</BaseButton>
      </li>
    </ul>
  )
}
