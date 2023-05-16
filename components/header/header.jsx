import Image from "next/image"
import logoSrc from "./logo.svg"
import avatarSrc from "./avatar.png"


export function Header () {
    return (
        <header className="flex py-4 items-center px-8 bg-sky-400 shadow-xl">
            <Image src={logoSrc} alt="logo-image" className="p-5 rounded-lg bg-orange-300 shadow-md"/>
            <div className="w-px h-8 bg-red-700 mx-6"></div>
            <button className="w-44 bg-blue-700 text-white rounded-lg px-5 py-2 shadow-lg text-2xl leading-tight">Play</button>
            <button className="ml-auto flex items-center gap-4 p-2 rounded-lg bg-orange-300 shadow-md">
            <Image src={avatarSrc} alt="avatar-image" width={48} height={48} />
            <div className="p-2 rounded-lg bg-red-950 shadow-md">
                <div className="text-teal-600 text-3xl leading-tight">Antonio</div>
                <div className="text-slate-200 text-2xs leading-tight">Rait : 1200</div>
            </div>
            <svg className="text-teal-900" width="28" height="28" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.18753 12.75C9.04368 12.75 8.89968 12.6951 8.78985 12.5852L3.16485 6.96022C2.94505 6.74043 2.94505 6.3845 3.16485 6.16485C3.38464 5.94519 3.74057 5.94505 3.96022 6.16485L9.18753 11.3922L14.4148 6.16485C14.6346 5.94505 14.9906 5.94505 15.2102 6.16485C15.4299 6.38464 15.43 6.74057 15.2102 6.96022L9.58522 12.5852C9.47539 12.6951 9.33139 12.75 9.18753 12.75Z" fill="currentColor"/>
</svg>

            </button>
        </header>
    )
}