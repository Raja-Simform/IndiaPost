import type { SearchProps } from "./SearchResultTypes";

export default function SearchResult({ data, CODE }: SearchProps) {
  return (
    <div className="flex-wrap mx-auto p-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6 text-purple-700 border-b-2 border-purple-300 pb-2">
        Post Offices : {CODE}
      </h2>
      <p className="mb-6 italic text-gray-700 ">{data.Message}</p>

      <div className="grid gap-8 md:grid-cols-3">
        {data.PostOffice?.map((office) => (
          <div
            key={office.Name}
            className="border border-purple-300 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow bg-white text-left "
          >
            <h3 className="text-2xl font-extrabold mb-3 text-purple-800 text-center">
              {office.Name}
            </h3>
            <div className="flex justify-around">
            <div> <p className="mb-2">
              <span className="font-semibold text-purple-600">Branch Type:</span>{" "}
              {office.BranchType}
            </p>
            <p className="mb-2">
              <span className="font-semibold text-purple-600">
                Delivery Status:
              </span>{" "}
              {office.DeliveryStatus}
            </p>
            <p className="mb-2">
              <span className="font-semibold text-purple-600">District:</span>{" "}
              {office.District}
            </p>
            <p className="mb-2">
              <span className="font-semibold text-purple-600">Division:</span>{" "}
              {office.Division}
            </p></div>
            <div><p className="mb-2">
              <span className="font-semibold text-purple-600">Region:</span>{" "}
              {office.Region}
            </p>
            <p className="mb-2">
              <span className="font-semibold text-purple-600">State:</span>{" "}
              {office.State}
            </p>
            <p className="mb-2">
              <span className="font-semibold text-purple-600">Circle:</span>{" "}
              {office.Circle}
            </p>

            {office.Description && (
              <p className="mt-4 text-gray-600 italic border-t pt-3">
                {office.Description}
              </p>
            )}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
