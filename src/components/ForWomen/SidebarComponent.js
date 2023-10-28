import React from "react";

export default function SidebarComponent() {
  return (
    <div className="sticky max-h-48 rounded-lg top-24 bg-[#000000] ml-2 px-8 lg:ml-12">
      <h1 className="font-bold text-[32px] text-white">For Women</h1>
      <h2 className="ml-2 font-bold text-[16px] text-default-300">
        Current Trend
      </h2>
      <h2 className="ml-2 font-bold text-[16px] text-default-300">
        Collection
      </h2>
      <h2 className="ml-2 font-bold text-[16px] text-default-300">All Stuff</h2>
    </div>
  );
}
