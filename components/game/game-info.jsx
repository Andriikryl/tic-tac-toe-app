import clsx from "clsx";
import { Profile } from "../profile";
import { GameSymbol } from "./game-symbol";
import { GAME_SYMBOLS } from "./constants";

import avatarSrc1 from "./images/avatar-1.png";
import avatarSrc2 from "./images/avatar-2.png";
import avatarSrc3 from "./images/avatar-3.png";
import avatarSrc4 from "./images/avatar-4.png";
import { useEffect, useState } from "react";

const players = [
  {id:1, name: "John", rating: 666, avatar: avatarSrc1, symbol: GAME_SYMBOLS.CROSS},
  {id:1, name: "John", rating: 777, avatar: avatarSrc2, symbol: GAME_SYMBOLS.CROSS},
  {id:1, name: "John", rating: 888, avatar: avatarSrc3, symbol: GAME_SYMBOLS.CROSS},
  {id:1, name: "John", rating: 999, avatar: avatarSrc4, symbol: GAME_SYMBOLS.CROSS},
]

export function GameInfo({ className, playersCount }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 justify-between grid grid-cols-2 gap-3"
      )}
    >
      {players.slice(0, playersCount).map((player, index) => (
        <PlayerInfo
          key={player.id}
          playerInfo={player}
          isRight={index % 2 === 1}
        />
      ))}
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight }) {

  const [seconds, setSeconds] = useState(6);

  const minutesString =  String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0")
  const isDanges = seconds < 10;

  useEffect(() => {
    setInterval(() => {
        setSeconds((s) => Math.max(s - 1, 0))
    }, 1000)
  }, [])

  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <Profile
          className="w-44"
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
        />
        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
          <GameSymbol symbol={playerInfo.symbol} />
        </div>
      </div>
      <div className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")} />
      <div
        className={clsx(
          "text-lg font-semibold",
          isRight && "order-1",
          isDanges ? 'text-orange-600 ' : 'text-slate-900 '
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}