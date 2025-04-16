import { cn } from "@/lib/utils";

export default function KitchenSummary({
                                           value,
                                           width = "103px",
                                           height = "58px",
                                           bgColor = "custom-black",
                                           className = "",
                                       }) {
    return (
        <div
            className={cn(
                "flex p-0.5 gap-2 items-center justify-center rounded-[10px] shadow-md cursor-pointer",
                bgColor,
                className
            )}
            style={{ width, height }}
        >
            <img src="/src/assets/room-cards-icons/kitchen.svg" alt="Kitchen Icon" />
            <label className="text-[20px] text-white">{value}</label>
        </div>
    );
}
