import { BranchType, DeliveryStatus } from "../SearchResults/SearchResult.constants";

export const deliveryOptions = [
    { label: "Delivery Status (All)", value: DeliveryStatus.ALL },
    { label: "Delivery", value: DeliveryStatus.DELIVERY },
    { label: "Non-Delivery", value: DeliveryStatus.NON_DELIVERY },
  ];
  
  export const branchTypeOptions = [
    { label: "Branch Type (All)", value: BranchType.ALL },
    { label: "Branch PostOffice", value: BranchType.BRANCH_POST_OFFICE },
    { label: "Sub PostOffice", value: BranchType.SUB_POST_OFFICE },
  ];