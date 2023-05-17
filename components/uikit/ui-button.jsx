import clsx from "clsx"

export function UiButton({children, className, size, variant}){

    const buttonClassName = clsx(
        '',
        className,
        {
            md: "px-6 py-2 shadow-lg text-2xl leading-tight",
            lg: "px-5 py-2 shadow-lg text-2xl leading-tight"
        }[size],
        {
            primary: "bg-blue-700 text-white rounded-lg",
            outline: "border border-teal-600 teaxt-teal-600 hover:bg-teal-50",
        }[variant],
    )

    return (
        <button className={buttonClassName}>{children}</button>
    )
}