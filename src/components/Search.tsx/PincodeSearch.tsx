import { useEffect, useState } from "react";
import type { SearchData, SearchProps } from "./SearchTypes";
import SearchResult from "../SearchResults/SearchResult";

export default function PostOfficeList({ CODE }: SearchProps) {
  const [data, setData] = useState<SearchData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPostOffices() {
      setLoading(true);
      setError(null);
      setData(null);
      try {
        const res = await fetch(`https://api.postalpincode.in/pincode/${CODE}`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const json: SearchData[] = await res.json();
        // The API returns an array with one object
        if (json.length === 0) {
          setError("No data found");
          setData(null);
        } else {
          setData(json[0]);
        }
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    fetchPostOffices();
  }, [CODE]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-48 text-gray-500">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-48 text-red-500">
        Error: {error}
      </div>
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
