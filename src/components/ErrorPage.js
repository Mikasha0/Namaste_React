import { useRouteError } from "react-router-dom";
export const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
        <h3 className="text-2xl font-bold text-red-500 mb-4"><span className="text-black">Status : </span>{err.status}</h3>

        <p className="text-red-700 mb-6">
          {err.data}
        </p>
        <button className="bg-blue-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Go Back
        </button>
      </div>
    </div>
  );
};
