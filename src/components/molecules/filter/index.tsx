import TagButton from "../../atoms/tab-button";

type Props = {
  labelTag: string[];
  deleteTag(i: number): void;
  deleteTotal?(): void;
};

const Filter = ({ labelTag, deleteTag, deleteTotal }: Props) => {
  return (
    <>
      {labelTag.length > 0 && (
        <div className="px-6 max-w-[1100px] mx-auto -mt-9 relative z-10 flex items-center justify-between">
          <div className="px-10 py-5 bg-white rounded-[5px] w-full flex items-center justify-between gap-4 shadow-lg">
            <div className="flex flex-wrap items-center gap-4">
              {labelTag.map((item, i) => (
                <TagButton key={i} text={item} onClick={() => deleteTag(i)} />
              ))}
            </div>
            <div
              onClick={deleteTotal}
              className="cursor-pointer leading-4 border-solid border-transparent border-b-[1px] text-very font-semibold hover:text-desaturated hover:border-desaturated"
            >
              Clear
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Filter;
