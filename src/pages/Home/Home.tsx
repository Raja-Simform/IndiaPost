import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <main className="max-w-4xl mx-auto p-8 text-center">
        <h2 className="text-5xl font-bold mb-6 text-cyan-700">Welcome to India Post</h2>
        <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
          Discover detailed information about any post office in India using the Postal PIN Code API.
          Search by PIN code or branch name to get instant results.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          <Link
            to="/pincodesearch"
            className="px-8 py-4 bg-cyan-500 text-white rounded-full text-xl font-semibold hover:bg-blue-700 transition"
          >
            Search by PIN Code
          </Link>
          <Link
            to="/branchsearch"
            className="px-8 py-4 bg-green-600 text-white rounded-full text-xl font-semibold hover:bg-green-700 transition"
          >
            Search by Branch Name
          </Link>
        </div>

        <section className="mt-16 bg-blue-50 p-8 rounded-lg shadow-md max-w-3xl mx-auto text-left">
          <h3 className="text-2xl font-semibold mb-4 ">About the Postal PIN Code API</h3>
          <p className="mb-2">
            The Postal PIN Code API provides detailed information about post offices across India.
            You can search by postal PIN code or branch name to get data such as branch type,
            delivery status, district, state, and more.
          </p>
          <p>
            This API is free to use with no request limits, making it perfect for developers and
            enthusiasts looking to integrate postal data into their applications.
          </p>
        </section>
      </main>
    </>
  );
}
