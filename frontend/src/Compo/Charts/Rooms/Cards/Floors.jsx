import { cn } from "@/lib/utils";

export default function Floors({
                                   value,
                                   label = "Floors",
                                   width = "86px",
                                   height = "77px",
                                   bgColor = "custom-black",
                                   valueColor = "text-white",
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
