import { useEffect, useState } from "react";
import type { SearchData, SearchProps } from "./SearchTypes";
import SearchResult from "../SearchResults/SearchResult";
import Loading from "../Loading/Loading";
import FetchError from "../Error/Error";
import concatenate from "../../utility/Concatenate";

export default function PostOfficeList({ CODE }: SearchProps) {
  const [data, setData] = useState<SearchData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const Endpoints=`https://api.postalpincode.in/pincode/`
  useEffect(() => {
    async function fetchPostOffices() {
      setLoading(true);
      setError(null);
      setData(null);
      try {
        const res = await fetch(concatenate(Endpoints,CODE));
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const PostOfficeData: SearchData[] = await res.json();
        if (PostOfficeData.length === 0) {
          setError("No data found");
          setData(null);
        } else {
          setData(PostOfficeData[0]);
        }

      } catch (err: unknown) {
        if(err instanceof Error){
          setError(err.message || "Something went wrong");
        }
      
      } finally {
        setLoading(false);
      }
    }
    fetchPostOffices();
  }, [CODE,Endpoints]);

  if (loading)
    return (
      <Loading/>
    );

  if (error)
    return (
      <FetchError message={error}/>
    );

  if (!data || data.Status === "Error" || !data.PostOffice)
    return (
      <div className="flex justify-center items-center h-48 text-gray-500">
        No post offices found for PIN code {CODE}.
      </div>
    );

  return (
    <SearchResult data={data} CODE={CODE}/>
  );
}
