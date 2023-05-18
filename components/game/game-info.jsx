import clsx from "clsx";
import { Profile } from "../profile";
import { CrossIcon } from "./icons/cross-icon";
import { GAME_SYMBOLS } from "./constants";
import {GameSymbol} from "./constants"

const players = [
  {name: "John", rating: 666, avatar: '', symbol: GAME_SYMBOLS.CROSS}
]

export function GameInfo({className}){
  return (
    <div className={clsx(className, "rounded-lg bg-opacity-60 backdrop-filter backdrop-blur-lg bg-white shadow px-8 py-4 flex justify-between")}>

      <PlayerInfo/>
    </div>
  )
}

function PlayerInfo({playerInfo}) {
  return (
    <div className="flex gap-4 items-center">
    <div className="relative">
      <Profile className="w-[180px]" name={playerInfo.name} rating={playerInfo.rating} avatar={playerInfo.avatar}/>
      <div className="w-7 h-7 rounded-full bg-white shadow absolute -left-1 -top-1 items-center justify-center flex">
        <GameSymbol symbol={playerInfo.symbol} />
      </div>
    </div>
    <div className="h-6 w-px bg-black"></div>
    <div>
      <p className="text-[30px]">01:08</p>
    </div>
  </div>
  )
}