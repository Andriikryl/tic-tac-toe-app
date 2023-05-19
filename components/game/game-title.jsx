import Link from "next/link";
import { ArrowLeftIcon } from "./icons/arrow-left-icon";
import { StarIcon } from "./icons/star-icon";
import { UserIcon } from "./icons/user-icon";
import { HistoryIcon } from "./icons/history-icon";

export function GameTitle({playersCount}) {
    return (
        <div className="pl-2">
            <Link href="#" className="flex items-center gap-2 text-2xl">
            <ArrowLeftIcon/>
                To main
            </Link>
            <h1 className="text-4xl leading-tight pb-3">Крестики нолики</h1>
            <div className="flex items-center gap-7 text-2xl">
                <StarIcon/>
                <div className="flex items-center gap-1">
                <UserIcon/> {playersCount}
                </div>
                <div className="flex items-center gap-1">
                <HistoryIcon/>
                1 minute to go
                </div>
            </div>
        </div>
    )
}