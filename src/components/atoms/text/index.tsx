import clsx from "clsx";

type Props = {
  className?: string;
  text: string;
};

const Text = ({ className, text }: Props) => (
  <div className={clsx(className)}>{text}</div>
);
export default Text;
