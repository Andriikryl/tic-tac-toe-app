import clsx from "clsx";
import { Profile } from "../profile";
import { CrossIcon } from "./icons/cross-icon";

export function GameInfo({className}){
  return (
    <div className={clsx(className, "bg-white rounded-2xl shadow-md px-8 py-4 flex justify-between")}>
      <div className="flex gap-4 items-center">
        <div className="relative">
          <Profile className="w-[180px]"/>
          <div className="w-7 h-7 rounded-full bg-white shadow absolute -left-1 -top-1 items-center justify-center flex">
            <CrossIcon/>
          </div>
        </div>
        <div className="h-6 w-px bg-black"></div>
        <div>
          <p className="text-[30px]">01:08</p>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <div>
          <p className="text-[30px]">01:08</p>
        </div>
        <div className="h-6 w-px bg-black"></div>
        <div className="relative">
          <Profile className="w-[180px]"/>
          <div className="w-7 h-7 rounded-full bg-white shadow absolute -left-1 -top-1 items-center justify-center flex">
            <CrossIcon/>
          </div>
        </div>
      </div>
    </div>
  )
}