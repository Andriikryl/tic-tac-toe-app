import Link from "next/link";
import { ArrowLeftIcon } from "./icons/arrow-left-icon";

export function GameTitle() {
    return (
        <div className="pl-2">
            <Link href="#" className="flex items-center gap-2 text-2xl">
            <ArrowLeftIcon/>
                To main
            </Link>
            <h1 className="text-4xl leading-tight">Крестики нолики</h1>
        </div>
    )
}