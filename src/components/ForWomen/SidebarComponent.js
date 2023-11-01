import React from "react";
import Link from "next/link";

export default function SidebarComponent() {
  return (
    <div className="sticky max-h-48 rounded-lg top-24 bg-[#000000] ml-2 px-8 lg:ml-12">
      <h1 className="font-bold text-[32px] text-white">For Women</h1>
      <h2 className="ml-2 font-bold text-[16px] text-default-300">
        {/* Current Trend */}
      </h2>
      <Link href={"/all-collection"}>
        <h2 className="ml-2 font-bold text-[16px] text-default-300 transition-transform duration-300 transform-gpu hover:text-yellow-500 hover:scale-90 hover:font-bold">
          Collection
        </h2>
      </Link>
      <Link href={"/all-stuff"}>
        <h2 className="ml-2 font-bold text-[16px] text-default-300 transition-transform duration-300 transform-gpu hover:text-yellow-500 hover:scale-90 hover:font-bold">
          All Stuff
        </h2>
      </Link>
    </div>
  );
}
