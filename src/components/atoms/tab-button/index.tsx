import IconRemove from "../../../icons/gl.remove";
import Text from "../text";

type Props = {
  onClick?(): void;
  text: string;
};

const TagButton = ({ onClick, text }: Props) => (
  <div className="flex">
    <div className="grid place-content-center h-[32px] px-[10px]  w-fit rounded-s-[5px] bg-light text-paragraph-2 font-medium text-desaturated">
      <Text className="leading-relaxed mt-1" text={text} />
    </div>
    <button
      className="bg-desaturated hover:bg-very w-8 grid place-content-center rounded-r-[5px]"
      onClick={onClick}
    >
      <IconRemove />
    </button>
  </div>
);
export default TagButton;
