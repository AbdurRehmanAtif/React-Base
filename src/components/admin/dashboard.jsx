import React from "react";

const dashboard = () => {
  return (
    <>
      <div className="sm:ml-64 flex items-center justify-center">
        <div className="max-w-7xl w-full">
          <div className="grid bg-gray-300 gap-4 mb-4 mt-4">
            <span className="block p-6">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Dashboard
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology.
              </p>
            </span>
          </div>

          <div className="grid bg-gray-500 gap-4 mb-4 h-[400px]">
            <span className="block p-6">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Another Section
              </h5>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default dashboard;
