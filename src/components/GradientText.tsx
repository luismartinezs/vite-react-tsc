import PropTypes from 'prop-types'

type Props = {
  children: any
}

export default function GradientText({ children }: Props): JSX.Element {
  return (
    <span className="-mx-2 px-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
      {children}
    </span>
  )
}

GradientText.propTypes = {
  children: PropTypes.node.isRequired,
}
