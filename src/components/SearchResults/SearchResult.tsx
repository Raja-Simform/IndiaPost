import { useState } from "react";
import type { SearchProps } from "./SearchResultTypes";
import SearchResultRender from "./SearchResultRender";
import { DeliveryStatus, BranchType } from "./SearchResult.constants";
import Select from "../Select/Select";
import { branchTypeOptions, deliveryOptions } from "../Select/Select.constant";

export default function SearchResult({ data, CODE }: SearchProps) {
  const [selectedDelivery, setSelectedDelivery] = useState(DeliveryStatus.ALL);
  const [selectedBranchType, setSelectedBranchType] = useState(BranchType.ALL);

  const filteredPostOffices = data.PostOffice?.filter((office) => {
    const deliveryMatch =
      selectedDelivery === DeliveryStatus.ALL ||
      office.DeliveryStatus === selectedDelivery;
    const branchTypeMatch =
      selectedBranchType === BranchType.ALL ||
      office.BranchType === selectedBranchType;
    return deliveryMatch && branchTypeMatch;
  });

  return (
    <div className="flex-wrap mx-auto p-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 min-h-screen">
      <div className="flex justify-center">
      <Select
          name="Delivery"
          value={selectedDelivery}
          onChange={(e) => setSelectedDelivery(e.target.value)}
          options={deliveryOptions}
        />
        <Select
          name="BranchType"
          value={selectedBranchType}
          onChange={(e) => setSelectedBranchType(e.target.value)}
          options={branchTypeOptions}
        />
      </div>
      <h2 className="text-3xl font-semibold mb-6 text-purple-700 border-b-2 border-purple-300 pb-2">
        Post Offices : {CODE}
      </h2>
      <p className="mb-6 italic text-gray-700">{data.Message}</p>

      <SearchResultRender filteredPostOffices={filteredPostOffices} />
    </div>
  );
}
