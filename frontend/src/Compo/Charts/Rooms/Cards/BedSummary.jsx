import { cn } from "@/lib/utils";

export default function BedSummary({
                                       value,
                                       width = "135px",
                                       height = "58px",
                                       bgColor = "custom-black",
                                       className = "",
                                   }) {
    return (
        <div
            className={cn(
                "p-2 flex items-center gap-1.5 justify-start rounded-[10px] shadow-md cursor-pointer",
                bgColor,
                className
            )}
            style={{ width, height }}
        >
            <img src="/src/assets/room-cards-icons/bed.svg" alt="Bed Icon" />
            <label className="text-[20px] text-white">{value}</label>
        </div>
    );
}
