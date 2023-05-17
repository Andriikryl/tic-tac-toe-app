
import { GameField } from "../components/game/game-field";
import { GameInfo } from "../components/game/game-info";
import { GameTitle } from "../components/game/game-title";
import { Header } from "../components/header";

export default function HomePage() {
  return (
    <div className="bg-[#e9edc9] min-h-screen">
      <Header/>
      <main className="pt-6 mx-auto max-w-[900px] pb-6">
      <GameTitle/>
      <GameInfo className="mt-4"/>
      <GameField className="mt-6"/>
      </main>
    </div>
  )
}
