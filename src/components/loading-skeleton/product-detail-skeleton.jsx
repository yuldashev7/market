import React from 'react';

export default function ProductDetailSkeleton({ visible = true }) {
  if (!visible) return null;

  return (
    <div
      role="status"
      aria-busy="true"
      className="fixed inset-0 z-50 overflow-auto bg-white/90 animate-pulse"
    >
      <div className="min-h-screen flex flex-col px-4 sm:px-6 md:px-10 lg:px-20 py-6">
        <div className="hidden lg:flex justify-between gap-6 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-32 h-4 sm:w-36 sm:h-5 md:w-40 md:h-6 bg-gray-200 rounded"
            />
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-6 sm:mt-[50px] md:mt-[100px] md:flex-row">
          <div className="w-full sm:w-[200px] md:w-[300px] lg:w-[400px] h-48 sm:h-64 md:h-72 lg:h-80 bg-gray-200 rounded-lg" />

          <div className="flex-1 flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-4 lg:mt-0">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex gap-2 items-center">
                <div className="w-24 sm:w-28 md:w-32 h-4 sm:h-5 md:h-6 bg-gray-200 rounded" />
                <div className="w-32 sm:w-36 md:w-40 h-4 sm:h-5 md:h-6 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
