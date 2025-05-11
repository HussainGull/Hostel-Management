import {cn} from "@/lib/utils.js";

export default function FundsOverview({
                                          width = "915px",
                                          height = "100px",
                                          data = [],
                                          bgColor = "bg-black", // Tailwind-compliant class
                                          className = "",
                                      }) {
    return (
        <div
            className={cn(
                "flex justify-between items-center p-4 pr-10 rounded-[10px] shadow-md cursor-pointer",
                bgColor,
                className
            )}
            style={{width, height}}
        >
            {data.map((item, index) => (
                <div key={index} className="w-fit p-0 gap-1.5">
          <span className="text-[16px] text-white font-light block">{item.label}</span>
                    <span className={cn("font-semibold text-2xl", item.textColorClass)}>{item.fund}</span>
                </div>
            ))}
        </div>
    );
}
