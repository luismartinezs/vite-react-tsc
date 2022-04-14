type Props = {
  children?: React.ReactNode;
};

const GradientText: React.FC<Props> = ({ children }: Props): JSX.Element => {
  return (
    <span className="-mx-2 px-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
      {children}
    </span>
  );
}

export default GradientText