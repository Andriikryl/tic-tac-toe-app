import clsx from "clsx";
import { Profile } from "../profile";

export function GameInfo({className}){
  return (
    <div className={clsx(className, "bg-white rounded-2xl shadow-md px-8 py-4")}>
      <div>
        <div className="relative">
          <Profile/>
          <div className="w-7 h-7 rounded-full bg-white shadow absolute -left-1 -top-1"></div>
        </div>
      </div>
    </div>
  )
}