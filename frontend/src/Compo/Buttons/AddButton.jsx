import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";

export default function AddButton(
    {
        label = "Floors",
        width = "200px",
        height = "60px",
        bgColor = "bg-teal", // Make sure you're passing Tailwind class
        textColor = "text-white",
        className = "",
    }
) {
    return (
        <Button
            className={cn(
                "flex items-center justify-center rounded-[10px] shadow-md cursor-pointer font-light text-base p-4",
                bgColor,
                textColor,
                className
            )}
            style={{width, height}}
        >
            {label}
        </Button>
    );
}
