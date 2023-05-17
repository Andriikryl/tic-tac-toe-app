import clsx from "clsx"
import { ZeroIcon } from "./icons/zero-icon"
import { CrossIcon } from "./icons/cross-icon"
import { UiButton } from "../uikit/ui-button"

const cells = new Array(19 * 19).fill(null)


export function GameField({className}) {
    return (
        <div className={clsx(className, "rounded-lg bg-opacity-60 backdrop-filter backdrop-blur-lg bg-white shadow px-8 pt-5 pb-7")}>
            <div className="flex gap-4 mb-6">
            <div className="mr-auto">
                <div className="flex gap-2 items-center text-2xl">
                    <p>xod: </p>
                    <ZeroIcon className="w-5 h-5"/>
                </div>
                <div className="flex gap-2 items-center">
                    <p>seleduchii: </p>
                    <CrossIcon className="w-3 h-3"/>
                </div>
            </div>
            <UiButton size="md" variant="primary">Path</UiButton>
            <UiButton size="md" variant="outline" >zdatcy</UiButton>
            </div>
            <div className="grid justify-center grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px">
                {cells.map((_, i) => (
                    <button key={i} className="border border-slate-300 -ml-px -mt-px flex justify-center items-center">
                        <ZeroIcon className="w-4 h-4"/>
                    </button>
                ) )}
            </div>
        </div>
    )
}