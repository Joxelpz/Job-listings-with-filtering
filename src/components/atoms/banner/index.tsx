export const Banner = () => (
  <>
    <img
      src="./images/bg-header-desktop.svg"
      alt=""
      className="w-full sm:hidden md:inline"
    />
    <img
      src="./images/bg-header-mobile.svg"
      alt=""
      className="w-full sm:inline md:hidden"
    />
  </>
);
export default Banner;
