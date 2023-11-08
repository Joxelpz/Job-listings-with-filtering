import clsx from "clsx";
import Text from "../text";

const variantMap = {
  rounded: "rounded-[5px] text-paragraph-2 ",
  "rounded-full": "rounded-full text-paragraph-3 uppercase ",
};
const colorMap = {
  primary:
    "bg-light hover:bg-desaturated text-desaturated hover:text-white cursor-pointer",
  new: "bg-desaturated text-white",
  featured: "bg-very text-white",
};

type Props = {
  onClick?(): void;
  text: string;
  variant: "rounded" | "rounded-full";
  color: "primary" | "new" | "featured";
};

const Tag = ({ onClick, text, variant, color }: Props) => (
  <div
    className={clsx(
      "flex items-center justify-center h-8 px-[10px] w-fit font-bold",
      variantMap[variant as keyof typeof variantMap],
      colorMap[color as keyof typeof colorMap]
    )}
    onClick={onClick}
  >
    <Text className="leading-relaxed mt-1" text={text} />
  </div>
);
export default Tag;
