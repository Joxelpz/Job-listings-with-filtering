import Tag from "../tag";
import Title from "../title";

type Props = {
  company: string;
  newTag?: boolean;
  featuredTag?: boolean;
};

const TitleTag = ({ company, newTag, featuredTag }: Props) => {
  return (
    <div className="flex items-center sm:gap-6 md:gap-4">
      <Title
        className="text-desaturated sm:text-heading-3 md:text-heading-2 font-bold"
        title={company}
      />
      <div className="flex items-center gap-2">
        {newTag && <Tag variant="rounded-full" color="new" text="new!" />}
        {featuredTag && (
          <Tag variant="rounded-full" color="featured" text="featured" />
        )}
      </div>
    </div>
  );
};
export default TitleTag;
