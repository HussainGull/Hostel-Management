import { cn } from "@/lib/utils";

export default function DataRow({
                                    data = [],
                                    bgColor = "bg-black", // Tailwind-compliant class
                                    className = "",
                                }) {
    return (
        <div
            className={cn(
                "w-full h-[80px] flex justify-between items-center p-4 rounded-[10px] shadow-md cursor-pointer",
                bgColor,
                className
            )}
        >
            {data.map((item, index) => (
                <div key={index} className="w-fit p-0 gap-1.5">
          <span className="text-[16px] text-white font-light block">
            {item.label}
          </span>
                    <span className={cn("font-semibold text-2xl", item.textColorClass)}>
            {item.value}
          </span>
                </div>
            ))}
        </div>
    );
}
