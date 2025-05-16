import { useState } from "react";
import type { FilterProps, SearchProps } from "./SearchResultTypes";
import SearchResultRender from "./SearchResultRender";

export default function SearchResult({ data, CODE }: SearchProps) {
  const [filter, setFilter] = useState<FilterProps>({ delivery: "all", branchType: "all" });
  const [selectedDelivery, setSelectedDelivery] = useState("all");
  const [selectedBranchType, setSelectedBranchType] = useState("all");

  function handleSort() {
    setFilter({
      delivery: selectedDelivery,
      branchType: selectedBranchType,
    });
  }
  const filteredPostOffices = data.PostOffice?.filter((office) => {
    const deliveryMatch =
      filter.delivery === "all" || office.DeliveryStatus === filter.delivery;
    const branchTypeMatch =
      filter.branchType === "all" || office.BranchType === filter.branchType;
    return deliveryMatch && branchTypeMatch;
  });
  return (
    <div className="flex-wrap mx-auto p-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 min-h-screen">
      <div className="flex justify-center">
        <select
          name="Delivery"
          className=" border-2  p-2 r"
          value={selectedDelivery}
          onChange={(e) => setSelectedDelivery(e.target.value)}
        >
          <option value="all">Delivery Staus(All)</option>
          <option value="Delivery">Delivery</option>
          <option value="Non-Delivery">Non-Delivery</option>
        </select>
        <select
          name="BranchType"
          id=""
          className=" ml-2 border-2  p-2 "
          value={selectedBranchType}
          onChange={(e) => setSelectedBranchType(e.target.value)}
        >
          <option value="all">BranchType(All)</option>
          <option value="Post Office">Branch PostOffice</option>
          <option value="Sub Post Office">Sub PostOffice</option>
        </select>
        <button
          onClick={handleSort}
          className="ml-2 px-6 py-2 bg-blue-600 text-white rounded font-semibold "
        >
          Sort
        </button>
      </div>
      <h2 className="text-3xl font-semibold mb-6 text-purple-700 border-b-2 border-purple-300 pb-2">
        Post Offices : {CODE}
      </h2>
      <p className="mb-6 italic text-gray-700 ">{data.Message}</p>

       <SearchResultRender filteredPostOffices={filteredPostOffices}/>
    </div>
  );
}
