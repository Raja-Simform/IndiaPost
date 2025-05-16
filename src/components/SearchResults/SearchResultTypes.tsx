export interface PostOffice {
  Name: string;
  Description: string;
  BranchType: string;
  DeliveryStatus: string;
  Circle: string;
  District: string;
  Division: string;
  Region: string;
  State: string;
}

export interface SearchData {
  Message: string;
  Status: string;
  PostOffice: PostOffice[] | null;
}

export interface FilterProps {
  delivery: string;
  branchType: string;
}

export type SearchProps = {
  data: {
    PostOffice?: PostOffice[];
    Message: string;
  };
  CODE: string;
};

export type SearchResultRenderProps = {
  filteredPostOffices?: PostOffice[];
};
