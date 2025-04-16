import { cn } from "@/lib/utils";

export default function WashroomSummary({
                                            value,
                                            width = "103px",
                                            height = "58px",
                                            bgColor = "custom-black",
                                            className = "",
                                        }) {
    return (
        <div
            className={cn(
                "gap-1.5 p-2 flex items-center justify-start rounded-[10px] shadow-md cursor-pointer",
                bgColor,
                className
            )}
            style={{ width, height }}
        >
            <img src="/src/assets/room-cards-icons/washroom.svg" alt="Washroom Icon" />
            <label className="text-[20px] text-white">{value}</label>
        </div>
    );
}
