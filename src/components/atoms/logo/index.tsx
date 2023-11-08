type Props = {
  src?: string;
};

export const Logo = ({ src }: Props) => (
  <div className="sm:min-w-[48px] sm:w-[48px] sm:min-h-[48px] sm:h-[48px] sm:left-6 sm:-top-6 md:min-w-[88px] md:w-[88px] md:min-h-[88px] md:h-[88px] md:left-0 md:-top-0 rounded-full sm:absolute md:relative">
    <img className="w-full h-full" src={src} alt="logo" />
  </div>
);
export default Logo;
