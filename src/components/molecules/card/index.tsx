import clsx from "clsx";
import DescriptionCard from "../../atoms/description-card";
import Logo from "../../atoms/logo";
import SeparatorLine from "../../atoms/separator-line";
import Tag from "../../atoms/tag";
import Title from "../../atoms/title";
import TitleTag from "../../atoms/title-tag";

type Props = {
  src?: string;
  company: string;
  newTag?: boolean;
  featuredTag?: boolean;
  title: string;
  postedAt: string;
  contract: string;
  location: string;
  list: string[];
  onClick?(item: string): void;
};

const Card = ({
  src,
  company,
  newTag,
  featuredTag,
  title,
  postedAt,
  contract,
  location,
  list,
  onClick,
}: Props) => {
  return (
    <div className="sm:px-6 sm:pb-6 sm:pt-8 md:py-8 md:px-10  w-full rounded-[5px] bg-white relative shadow-lg">
      <div
        className={clsx(
          "h-full w-[5px] rounded-s-[5px] absolute top-0 left-0",
          featuredTag ? "bg-desaturated" : "bg-white"
        )}
      />
      <div className="flex gap-6">
        <Logo src={src} />
        <div className="flex sm:flex-col md:flex-row md:items-center md:justify-between w-full">
          <div className="flex flex-col justify-between h-full">
            <TitleTag
              company={company}
              newTag={newTag}
              featuredTag={featuredTag}
            />
            <Title
              className="sm:mt-[14px] sm:mb-[18px] md:mt-0 md:mb-0 text-very sm:text-heading-3 md:text-heading-1 leading-[22px] hover:text-desaturated cursor-pointer font-bold"
              title={title}
            />
            <DescriptionCard
              postedAt={postedAt}
              contract={contract}
              location={location}
            />
          </div>
          <SeparatorLine />
          <div className="flex gap-4 flex-wrap">
            {list.map((item, i) => (
              <Tag
                variant="rounded"
                color="primary"
                text={item}
                key={i}
                onClick={() => onClick && onClick(item)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
