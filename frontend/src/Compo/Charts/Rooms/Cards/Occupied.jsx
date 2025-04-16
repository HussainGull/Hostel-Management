import { cn } from "@/lib/utils";

export default function Occupied({
                                     value,
                                     label = "Occupied",
                                     width = "110px",
                                     height = "77px",
                                     bgColor = "custom-black",
                                     valueColor = "text-[var(--custom-yellow)]",
                                     className = "",
                                 }) {
    return (
        <div
            className={cn(
                "flex flex-col items-start p-3 justify-center rounded-[10px] shadow-md cursor-pointer",
                bgColor,
                className
            )}
            style={{ width, height }}
        >
            <label className="text-[16px] text-white font-light">{label}</label>
            <label className={cn("text-[20px] font-semibold", valueColor)}>{value}</label>
        </div>
    );
}
