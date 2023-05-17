import Image from "next/image"
import logoSrc from "./logo.svg"
import { Profile } from "../profile"
import { ArrowDownIcon } from "./icons/arrow-down-icons"
import { UiButton } from "../uikit/ui-button"




export function Header () {
    return (
        <header className="flex py-4 items-center px-8 bg-opacity-60 backdrop-filter backdrop-blur-lg bg-[#faedcd] shadow-xl">
            <Image src={logoSrc} alt="logo-image" className="p-5 rounded-lg bg-opacity-60 backdrop-filter backdrop-blur-lg bg-white shadow"/>
            <div className="w-px h-8 bg-red-700 mx-6"></div>
            <UiButton className="w-44" variant="primary" size="lg">Play</UiButton>
            <button className="ml-auto flex items-center gap-4 p-2 rounded-lg bg-opacity-60 backdrop-filter backdrop-blur-lg bg-white shadow">
            <Profile/>
            <ArrowDownIcon/>
            </button>
        </header>
    )
}