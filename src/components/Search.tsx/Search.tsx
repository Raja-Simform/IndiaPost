// import { useEffect, useState } from "react";
// import type { SearchData, SearchProps } from "./SearchTypes";


// export default function PostOfficeList({ PINCODE }: SearchProps) {
//   const [data, setData] = useState<SearchData | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchPostOffices() {
//       setLoading(true);
//       setError(null);
//       setData(null);
//       try {
//         const res = await fetch(`https://api.postalpincode.in/pincode/${PINCODE}`);
//         if (!res.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const json: SearchData[] = await res.json();
//         // The API returns an array with one object
//         if (json.length === 0) {
//           setError("No data found");
//           setData(null);
//         } else {
//           setData(json[0]);
//         }
//       } catch (err: any) {
//         setError(err.message || "Something went wrong");
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchPostOffices();
//   }, [PINCODE]);

//   if (loading)
//     return (
//       <div className="flex justify-center items-center h-48 text-gray-500">
//         Loading...
//       </div>
//     );

//   if (error)
//     return (
//       <div className="flex justify-center items-center h-48 text-red-500">
//         Error: {error}
//       </div>
//     );

//   if (!data || data.Status === "Error" || !data.PostOffice)
//     return (
//       <div className="flex justify-center items-center h-48 text-gray-500">
//         No post offices found for PIN code {PINCODE}.
//       </div>
//     );

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h2 className="text-3xl font-semibold mb-6 text-blue-700">
//         Post Offices for PIN Code: {PINCODE}
//       </h2>
//       <p className="mb-6 italic text-gray-600">{data.Message}</p>

//       <div className="grid gap-6 md:grid-cols-2">
//         {data.PostOffice.map((office) => (
//           <div
//             key={office.Name}
//             className="border rounded-lg p-4 shadow hover:shadow-lg transition"
//           >
//             <h3 className="text-xl font-bold mb-2">{office.Name}</h3>
//             <p className="mb-1">
//               <span className="font-semibold">Branch Type:</span> {office.BranchType}
//             </p>
//             <p className="mb-1">
//               <span className="font-semibold">Delivery Status:</span> {office.DeliveryStatus}
//             </p>
//             <p className="mb-1">
//               <span className="font-semibold">District:</span> {office.District}
//             </p>
//             <p className="mb-1">
//               <span className="font-semibold">Division:</span> {office.Division}
//             </p>
//             <p className="mb-1">
//               <span className="font-semibold">Region:</span> {office.Region}
//             </p>
//             <p className="mb-1">
//               <span className="font-semibold">State:</span> {office.State}
//             </p>
//             <p className="mb-1">
//               <span className="font-semibold">Circle:</span> {office.Circle}
//             </p>
//             <p className="mb-1">
//               <span className="font-semibold">Country:</span> {office.Country}
//             </p>
//             {office.Description && (
//               <p className="mt-2 text-gray-600 italic">{office.Description}</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
