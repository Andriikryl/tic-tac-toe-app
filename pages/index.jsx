
import { useState } from "react";
import { GameField } from "../components/game/game-field";
import { GameInfo } from "../components/game/game-info";
import { GameTitle } from "../components/game/game-title";
import { Header } from "../components/header";

const playersCount = 2

export default function HomePage() {

  const [playersCount] = useState(4)

  return (
    <div className="bg-[#e9edc9] min-h-screen">
      <Header/>
      <main className="pt-6 mx-auto max-w-[900px] pb-6">
      <GameTitle playersCount={playersCount}/>
      <GameInfo playersCount={playersCount} className="mt-4"/>
      <GameField playersCount={playersCount} className="mt-6"/>
      </main>
    </div>
  )
}
