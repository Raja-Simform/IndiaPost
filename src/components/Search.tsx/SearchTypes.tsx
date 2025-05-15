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
  Country: string;
}

export interface SearchData {
  Message: string;
  Status: string;
  PostOffice: PostOffice[] | null;
}

export interface SearchProps {
  PINCODE: number | string;
}
