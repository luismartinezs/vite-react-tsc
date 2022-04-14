import WidthWrapper from "@/components/WidthWrapper";

interface Props {
  children?: React.ReactNode;
}

const SectionWrapper: React.FC<Props> = ({ children }: Props): JSX.Element => {
  return (
    <div className="py-16">
      <WidthWrapper>{children}</WidthWrapper>
    </div>
  );
};

export default SectionWrapper;
