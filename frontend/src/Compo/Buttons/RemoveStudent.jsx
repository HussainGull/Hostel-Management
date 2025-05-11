import {Button} from "@/components/ui/button"

export default function RemoveStudent({
    value,
                                      }) {
    return (
        <Button
            className="w-[300px] h-[72px] bg-transparent border border-[#EF4444] text-[#EF4444] hover:bg-[#FF2A2A] hover:text-white p-4 rounded-[15px] shadow-md transition-colors duration-300"
        >
            {value}
        </Button>
    );
}
