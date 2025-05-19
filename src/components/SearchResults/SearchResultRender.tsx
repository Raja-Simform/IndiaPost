import type { SearchResultRenderProps } from "./SearchResultTypes";
import Text from "../Text/Text";

export default function SearchResultRender({
  filteredPostOffices,
}: SearchResultRenderProps) {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {filteredPostOffices?.map((office) => (
        <div
          key={office.Name}
          className="border border-purple-300 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow bg-white text-left "
        >
          <h3 className="text-2xl font-extrabold mb-3 text-purple-800 text-center">
            {office.Name}
          </h3>
          <div className="flex justify-around">
            <div>
              <p className="mb-2">
                <Text>Branch Type:</Text>{" "}
                {office.BranchType}
              </p>
              <p className="mb-2">
                <Text>Delivery Status:</Text>{" "}
                {office.DeliveryStatus}
              </p>
              <p className="mb-2">
                <Text>District:</Text>{" "}
                {office.District}
              </p>
              <p className="mb-2">
                <Text>Division:</Text>{" "}
                {office.Division}
              </p>
            </div>
            <div>
              <p className="mb-2">
                <Text>Region:</Text>{" "}
                {office.Region}
              </p>
              <p className="mb-2">
                <Text>State:</Text>{" "}
                {office.State}
              </p>
              <p className="mb-2">
                <Text>Circle:</Text>{" "}{office.Circle}
              </p>

              {office.Description && (
                <p className="mt-4 text-gray-600 italic border-t pt-3">
                  <Text italic>{office.Description}</Text>
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
