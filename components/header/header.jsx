import Image from "next/image"
import logoSrc from "./logo.svg"
import { Profile } from "../profile"
import { ArrowDownIcon } from "./icons/arrow-down-icons"


export function Header () {
    return (
        <header className="flex py-4 items-center px-8 bg-opacity-60 backdrop-filter backdrop-blur-lg bg-[#faedcd] shadow-xl">
            <Image src={logoSrc} alt="logo-image" className="p-5 rounded-lg bg-opacity-60 backdrop-filter backdrop-blur-lg bg-white shadow"/>
            <div className="w-px h-8 bg-red-700 mx-6"></div>
            <button className="w-44 bg-blue-700 text-white rounded-lg px-5 py-2 shadow-lg text-2xl leading-tight">Play</button>
            <button className="ml-auto flex items-center gap-4 p-2 rounded-lg bg-opacity-60 backdrop-filter backdrop-blur-lg bg-white shadow">
            <Profile/>
            <ArrowDownIcon/>
            </button>
        </header>
    )
}