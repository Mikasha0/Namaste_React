export const OfflinePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">
          It seems like you are not online
        </h2>
        <p className="text-gray-600">
          Please check your internet connection and try again.
        </p>
      </div>
    </div>
  );
};
