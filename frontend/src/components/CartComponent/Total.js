import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill1Wave } from "@fortawesome/free-solid-svg-icons";
import { data } from "autoprefixer";
import Link from "next/link";


export default function Total(props) {
  const data = props.data;
  let totalPrice = 0;
  
  data.forEach(items => {
      const stuff = items.stuff;
      totalPrice += stuff.price * items.acount;
  });
 
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

          </div>
          <div className="flex justify-between mt-2">
            <h1 className="font-bold text-black text-[16px]">Total Cart</h1>
            <h1 className="font-bold text-black text-[16px]">Rp. {totalPrice}</h1>
          </div>
        </div>
        <div className="text-right mt-4">
          <Link href="https://api.whatsapp.com/send/?phone=6282144106278&text&type=phone_number&app_absent=0">
          <Button className="text-green-500 bg-[#000000] transition-transform duration-300 transform-gpu hover:bg-[#22c55e] hover:text-white hover:scale-110">
            <FontAwesomeIcon icon={faMoneyBill1Wave} />
            Chat Seller
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
