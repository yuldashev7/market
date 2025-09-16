import React from 'react';

export default function LoadingSkeleton({ visible = true, cards = 8 }) {
  if (!visible) return null;

  const items = Array.from({ length: cards });

  return (
    <div
      role="status"
      aria-busy="true"
      className="fixed inset-0 z-50 overflow-auto bg-white/90 animate-pulse"
    >
      <div className="min-h-screen flex flex-col">
        <header className="h-16 sm:h-20 px-6 flex items-center border-b border-gray-200">
          <div className="w-20 h-8 bg-gray-200 rounded-md" />
          <div className="ml-auto flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full" />
            <div className="w-20 h-6 bg-gray-200 rounded-md" />
          </div>
        </header>

        <div className="px-6 py-8">
          <div className="w-full h-48 sm:h-72 rounded-xl bg-gray-200" />
        </div>

        <main className="flex-1 px-6 pb-12">
          <div className="max-w-[1280px] mx-auto">
            <div className="w-48 h-6 bg-gray-200 rounded mb-6" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {items.map((_, i) => (
                <div
                  key={i}
                  className="p-4 border border-gray-100 rounded-lg"
                  aria-hidden="true"
                >
                  <div className="w-full h-40 bg-gray-200 rounded-md mb-4" />
                  <div className="w-3/4 h-4 bg-gray-200 rounded mb-2" />
                  <div className="w-1/2 h-4 bg-gray-200 rounded" />
                </div>
              ))}
            </div>
          </div>
        </main>

        <footer className="px-6 py-6 border-t border-gray-200">
          <div className="max-w-[1280px] mx-auto">
            <div className="w-40 h-4 bg-gray-200 rounded" />
          </div>
        </footer>
      </div>
    </div>
  );
}
