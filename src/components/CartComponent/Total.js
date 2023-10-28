import { Button } from "@nextui-org/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill1Wave } from "@fortawesome/free-solid-svg-icons";

export default function Total() {
  return (
    <div
      className="bg-[#e5e7eb] rounded-md mt-8"
      data-aos="fade-up"
      data-delay="500"
    >
      <div className="py-4 px-8 bg-[#000000] max-w-full text-white rounded-tr-md rounded-tl-md">
        <h1 className="font-bold text-[24px]">Total Cart</h1>
      </div>
      <div className="mb-4 mx-8 pb-4">
        <div className="text-[16px]">
          <div className="flex justify-between mt-2">
            <div>
              <h1 className="text-black ">Total Item Price</h1>
              <h1 className="text-black ">Tax</h1>
              <h1 className="text-black ">Discount</h1>
            </div>
            <div>
              <h1 className=" text-black ">Rp. 1.999.999 </h1>
              <h1 className=" text-black ">Rp. 199.999 </h1>
              <h1 className=" text-black ">Rp. 0 </h1>
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <h1 className="font-bold text-black text-[16px]">Total Cart</h1>
            <h1 className="font-bold text-black text-[16px]">Rp. 2.199.998</h1>
          </div>
        </div>
        <div className="text-right mt-4">
          <Button className="text-green-500 bg-[#000000] transition-transform duration-300 transform-gpu hover:bg-[#22c55e] hover:text-white hover:scale-110">
            <FontAwesomeIcon icon={faMoneyBill1Wave} />
            Purchase
          </Button>
        </div>
      </div>
    </div>
  );
}
