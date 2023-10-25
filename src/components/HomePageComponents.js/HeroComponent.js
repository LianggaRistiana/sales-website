import { Button, Link } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
// import

export default function HeroComponent() {
  return (
    <div className="flex justify-between relative">
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

      <div className="mr-20 leading-tight mt-16 max-w-[500px] ">
        <h1 className="font-bold text-[64px] mb-12">
          Everyone has the right to be stylish
        </h1>
        <h2 className="text-[24px]">
          Pay only for what suits you and what you like!
        </h2>

        <div className="flex justify-between mt-8">
          <Button
            radius="full"
            className="bg-[#FB9C46] text-white font-semibold px-20"
          >
            For Men
          </Button>
          <Link href="/for-women">
            <Button
              radius="full"
              className=" font-semibold px-20"
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
