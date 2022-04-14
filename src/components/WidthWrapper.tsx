interface Props {
  children?: React.ReactNode;
}

const WidthWrapper: React.FC<Props> = ({ children }: Props): JSX.Element => {
  return <div className="px-4 lg:px-0 lg:max-w-4xl mx-auto">{children}</div>;
};

export default WidthWrapper;
