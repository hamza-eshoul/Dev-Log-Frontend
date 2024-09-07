const Error = () => {
  return (
    <div className="flex h-[70vh] items-center justify-center p-6">
      <div className="w-full max-w-md transform overflow-hidden rounded-lg bg-white shadow-xl transition-all duration-300 hover:scale-105">
        <div className="bg-gradient-to-r from-red-500 to-red-600 p-4">
          <svg
            className="mx-auto h-24 w-24 animate-pulse text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <div className="p-6 text-center">
          <h2 className="mb-2 text-2xl font-bold text-red-600">
            Oops! Something went wrong
          </h2>
          <p className="mb-4 text-gray-600">
            We've encountered an unexpected issue
          </p>
          <p className="mb-4 rounded bg-red-50 p-3 font-medium text-gray-700">
            Our team has been notified and is working on a solution
          </p>
          <p className="text-gray-600">
            Please try again later or contact support if the problem persists
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 transform rounded-full bg-gradient-to-r from-red-500 to-red-600 px-6 py-2 text-white transition-all duration-300 hover:scale-105 hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Refresh Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
