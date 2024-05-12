import React from "react";

import {
  PiCallBellFill,
  PiClockClockwiseBold,
  PiCurrencyCircleDollarFill,
} from "react-icons/pi";

function Separator() {
  return (
    <div className="relative">
      <span className="bg-orange-300/80 h-[20px] w-1/3 absolute right-0 -top-[92px] rounded-l-md"></span>
      <div className="relative text-white flex justify-around items-center container mx-auto w-full mt-20 mb-16">
        <div className="flex flex-col justify-center items-center gap-2">
          <PiCallBellFill className="text-6xl" />
          <p className="text-2xl font-semibold">Rico</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <PiCurrencyCircleDollarFill className="text-6xl" />
          <p className="text-2xl font-semibold">Barato</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <PiClockClockwiseBold className="text-6xl" />
          <p className="text-2xl font-semibold">Rápido</p>
        </div>
      </div>
      <span className="bg-orange-300/80 h-[20px] w-1/3 absolute left-0 -bottom-[74px] rounded-r-md"></span>
    </div>
  );
}

export default Separator;
