import clsx from "clsx"
import avatarSrc from "./avatar.png"
import Image from "next/image"

export function Profile({className, name, rating, avatar = avatarSrc}) {
    return (
        <div className={clsx("flex items-center gap-4 p-2 rounded-lg bg-opacity-60 backdrop-filter backdrop-blur-lg bg-white shadow", className)}>
        <Image src={avatar} alt="avatar-image" width={48} height={48} />
        <div className="p-2 rounded-lg bg-[#faedcd] shadow-md">
            <div className="text-teal-600 text-3xl leading-tight">{name}</div>
            <div className=" text-black text-2xs leading-tight">Rait : {rating}</div>
        </div>
        </div>
    )
}