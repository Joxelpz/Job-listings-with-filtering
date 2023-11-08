import { useState } from "react";
import data from "../data/data.json";

const useDataFilter = () => {
  const [dataFilter, setDataFilter] = useState(data || []);
  const [labelTag, setLabelTag] = useState<string[]>([]);

  function filterData(filter: string) {
    const newArray = dataFilter.filter((item) =>
      item.languages.find((el) => el.includes(filter))
    );
    setDataFilter(newArray);
    if (!labelTag.includes(filter)) {
      let updatedLabelArray: string[] = [...labelTag];
      updatedLabelArray.push(filter);
      setLabelTag(updatedLabelArray);
    }
  }
  function deleteTag(i: number) {
    let updatedLabelArray = labelTag.filter((_, index) => index !== i);
    setLabelTag(updatedLabelArray);
    const newDataArray = data.filter((item) =>
      updatedLabelArray.every((tag) =>
        item.languages.find((el) => el.includes(tag))
      )
    );
    setDataFilter(newDataArray);
  }
  function deleteTotal() {
    setLabelTag([]);
    setDataFilter(data);
  }
  return {
    filterData,
    deleteTag,
    deleteTotal,
    dataFilter,
    labelTag,
  };
};
export default useDataFilter;
