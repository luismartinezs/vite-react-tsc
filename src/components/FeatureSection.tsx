import FeatureItem from "@/components/FeatureItem";
import SectionWrapper from "@/components/SectionWrapper";

const FeatureSection: React.FC = (): JSX.Element => {
  return (
    <SectionWrapper>
      <div className="flex justify-center items-start flex-col md:flex-row md:space-x-28 space-y-10 md:space-y-0">
        <FeatureItem title="Approachable">
          Builds on top of standard HTML, CSS and JavaScript with intuitive API
          and world-class documentation.
        </FeatureItem>
        <FeatureItem title="Performant">
          Truly reactive, compiler-optimized rendering system that rarely
          requires manual optimization.
        </FeatureItem>
        <FeatureItem title="Versatile">
          A rich, incrementally adoptable ecosystem that scales between a
          library and a full-featured framework.
        </FeatureItem>
      </div>
    </SectionWrapper>
  );
};

export default FeatureSection;
