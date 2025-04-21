import {cn} from "@/lib/utils";


export default function LabelCard(
    {
        value,
        label = "Floors",
        width = "200px",
        height = "60px",
        bgColor = "bg-black",
        valueColor = "text-white",
        className = "",
    }
) {
    return (
        <div className={cn('flex justify-start items-center rounded-lg shadow-md p-4 gap-6',
            bgColor,
            className,
        )}
             style={{width, height}}
        >
            <label className={cn('text-[18px] font-light', valueColor)}>{label}</label>
            <h2 className={cn('text-white text-[18px] font-bold', valueColor)}>{value}</h2>
        </div>
    )
}