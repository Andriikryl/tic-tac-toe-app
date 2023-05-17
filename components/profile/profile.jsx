import avatarSrc from "./avatar.png"
import Image from "next/image"

export function Profile() {
    return (
        <div className="flex items-center gap-4 p-2 rounded-lg bg-opacity-60 backdrop-filter backdrop-blur-lg bg-white shadow">
        <Image src={avatarSrc} alt="avatar-image" width={48} height={48} />
        <div className="p-2 rounded-lg bg-[#faedcd] shadow-md">
            <div className="text-teal-600 text-3xl leading-tight">Antonio</div>
            <div className=" text-black text-2xs leading-tight">Rait : 1200</div>
        </div>
        </div>
    )
}