import {cn} from "@/lib/utils.js";

export default function DataCard({
                                     width = "145px",
                                     height = "77px",
                                     value,
                                     label = "Total Rooms",
                                     bgColor = "bg-black",
                                     textColor = "text-white",
                                     valueTextSize = "text-xl",
                                     labelTextSize = 'text-[16px]',
                                     bold = true,
                                     className = "",

                                 }) {
    return (
        <div
            className={cn(
                "flex flex-col justify-center items-start p-4 gap-2 rounded-[10px] shadow-md cursor-pointer",
                bgColor,
                className
            )}
            style={{width, height}}
        >
            <label className={cn("text-white font-light", labelTextSize)}>{label}</label>
            <label
                className={cn(
                    valueTextSize,
                    textColor,
                    bold ? "font-semibold" : "font-normal"
                )}
            >
                {value}
            </label>
        </div>
    );
}

