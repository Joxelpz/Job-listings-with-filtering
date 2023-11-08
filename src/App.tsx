import clsx from "clsx";
import Card from "./components/molecules/card";
import Banner from "./components/atoms/banner";
import Filter from "./components/molecules/filter";
import useDataFilter from "./hooks/use-data-filter";

export default function App() {
  const { filterData, deleteTag, deleteTotal, dataFilter, labelTag } =
    useDataFilter();

  return (
    <div>
      <Banner />
      <Filter
        labelTag={labelTag}
        deleteTag={(i) => deleteTag(i)}
        deleteTotal={deleteTotal}
      />
      <div
        className={clsx(
          "px-6 pb-20 flex flex-col sm:gap-10 md:gap-6 max-w-[1100px] mx-auto",
          "sm:mt-[55px]",
          labelTag.length === 0 ? "md:!mt-[80px]" : "md:mt-[40px]"
        )}
      >
        {dataFilter.map((item, i) => (
          <Card
            key={i}
            src={item.logo}
            company={item.company}
            newTag={item.new}
            featuredTag={item.featured}
            title={item.position}
            postedAt={item.postedAt}
            contract={item.contract}
            location={item.location}
            list={item.languages}
            onClick={(item) => filterData(item)}
          />
        ))}
      </div>
    </div>
  );
}
