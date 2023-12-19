import { Button, Link } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
// import

export default function HeroComponent() {
  return (
    <div className=" lg:flex lg:justify-between text-center lg:text-left relative">
      {/* Main Image */}
      <div className="mt-5">
        <Image
          src="/images/main-image.svg"
          alt="Main Picture"
          height={809}
          width={497}
        ></Image>
        {/* <img src="/images/main-image.svg">
                </img> */}
      </div>

      <div className="mx-4 lg:mx-0 mr-20 leading-tight mt-16 max-w-[500px] ">
        <h1 className="font-bold text-[64px] mb-12">
          Everyone has the right to be stylish
        </h1>
        <h2 className="text-[24px]">
          Pay only for what suits you and what you like!
        </h2>

        <div className="flex justify-center lg:justify-between  mt-8">
          <Link href="/for-men">
            <Button
              radius="full"
              className="bg-[#FB9C46] text-white lg:mr-0 mr-2 font-semibold px-12 lg:px-20 transition-transform duration-300 transform-gpu hover:scale-95 hover:bg-[#000000]"
            >
              For Men
            </Button>
          </Link>
          <Link href="/for-women">
            <Button
              radius="full"
              className=" font-semibold px-12 lg:px-20 transition-transform duration-300 transform-gpu hover:scale-95 hover:bg-[#000000]"
              color="warning"
              variant="bordered"
            >
              For Women
            </Button>
          </Link>
        </div>
        <div className="flex mt-24 justify-center">
          <div className="max-w-[500px] bg-[#D9F0F4] px-32 py-8 rounded-md   ">
            <h2 className="text-[24px] justify-center ">
              &quot;You can have anything you want in life if you dress for it.
              &quot;
              <span className="font-bold text-[20px]"> —Edith Head</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
