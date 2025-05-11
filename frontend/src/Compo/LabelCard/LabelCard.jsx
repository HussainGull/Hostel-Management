import {cn} from "@/lib/utils.js";


export default function LabelCard(
    {
        value,
        showValue = true,
        label = "Floors",
        width = "200px",
        height = "60px",
        bgColor = "bg-black",
        valueColor = "text-white",
        className = "gap-0",
    }
) {
    return (
        <div className={cn('flex justify-center items-center rounded-lg shadow-md p-4 gap-6',
            bgColor,
            className,
        )}
             style={{width, height}}
        >
            <label className={cn('text-[18px] font-light', valueColor)}>{label}</label>
            {showValue && (
                <h2 className={cn('text-white text-[18px] font-bold', valueColor)}>{value}</h2>
            )}
        </div>
    )
}