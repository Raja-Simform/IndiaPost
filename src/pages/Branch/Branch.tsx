import { useRef, useState } from "react";
import BranchSearch from "../../components/Search/BranchSearch";

export default function Branch() {
  const [code, setCode] = useState<string>("");
  const ref = useRef<HTMLInputElement | null>(null);

  function handleSearch() {
    const data = ref.current?.value ?? "";
    setCode(data);
  }
  return (
    <>
      <div className="flex justify-center items-center">
        <input
          ref={ref}
          type="text"
          placeholder="Enter Branch"
          className="border p-2 rounded m-3 "
        />
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Search
        </button>
      </div>
      {code && <BranchSearch CODE={code} />}
    </>
  );
}
