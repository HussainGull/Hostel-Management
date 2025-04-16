import {Button} from "@/components/ui/button"

export default function AddStudent() {
    return (
        <Button
            className="w-[300px] h-[72px] bg-transparent border border-[#06B6D4] text-[#06B6D4] hover:bg-[#00FFF5] hover:text-black p-4 rounded-[15px] shadow-md transition-colors duration-300"
        >
            + Add Student
        </Button>
    );
}
