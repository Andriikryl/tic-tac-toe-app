import clsx from "clsx"
import { UiButton } from "../uikit/ui-button"
import { GameSymbol } from "./game-symbol"
import { useGameState } from "./use-game-state"







export function GameField({className}) {

    const {cells, currentMove, handleCellClick, nextMove} = useGameState()
    


    const actions = <>
                <UiButton size="md" variant="primary">Path</UiButton>
                <UiButton size="md" variant="outline" >zdatcy</UiButton>   
    </>

    return (
        <GameFieldLayout className={className}>
            <GameMoveInfo actions={actions} currentMove={currentMove} nextMove={nextMove}
         />
        <GameGrid>
            {cells.map((symbol, index) => (
                <GameCell key={index} onClick={() => {
                    handleCellClick(index)
                }}>
                    {symbol && <GameSymbol symbol={symbol} className="w-5 h-5"/>}
                </GameCell>
            ))}
        </GameGrid>
        </GameFieldLayout>
    )
}

function GameFieldLayout({children, className}){
    return (
        <div className={clsx(className, "rounded-lg bg-opacity-60 backdrop-filter backdrop-blur-lg bg-white shadow px-8 pt-5 pb-7")}>
            {children}
        </div>
    )
}


function GameMoveInfo({actions, currentMove, nextMove}) {
    return (
        <div className="flex gap-4 mb-6">
        <div className="mr-auto">
            <div className="flex gap-2 items-center text-2xl">
                <p>xod: </p>
                <GameSymbol symbol={currentMove}  className="w-5 h-5"/>
            </div>
            <div className="flex gap-2 items-center">
                <p>seleduchii: </p>
                <GameSymbol symbol={nextMove}  className="w-3 h-3"/>
            </div>
        </div>
        {actions}
        </div>
    )
}


function GameCell({children, onClick}){
    return (
        <button onClick={onClick} className="border border-slate-300 -ml-px -mt-px flex justify-center items-center">
            {children}
        </button>
    )
}

function GameGrid({children}){
    return (
        <div className="grid justify-center grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px">
            {children}
    </div>
    )
}