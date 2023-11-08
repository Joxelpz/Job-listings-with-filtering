import SeparatorPoint from "../separator-point";
import Text from "../text";

type Props = {
  postedAt: string;
  contract: string;
  location: string;
};

const DescriptionCard = ({ postedAt, contract, location }: Props) => {
  return (
    <div className="flex items-center sm:gap-[9px] md:gap-4">
      <Text
        className="text-dark sm:text-paragraph-2 md:text-paragraph-1 leading-[18px] font-medium"
        text={postedAt}
      />
      <SeparatorPoint />
      <Text
        className="text-dark sm:text-paragraph-2 md:text-paragraph-1 leading-[18px] font-medium"
        text={contract}
      />
      <SeparatorPoint />
      <Text
        className="text-dark sm:text-paragraph-2 md:text-paragraph-1 leading-[18px] font-medium"
        text={location}
      />
    </div>
  );
};
export default DescriptionCard;
