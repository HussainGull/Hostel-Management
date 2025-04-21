import {cn} from "@/lib/utils";

export default function StatCard({
                                     width = "135px",
                                     height = '60px',
                                     value,
                                     Imgsrc,
                                     bgColor = "bg-black",
                                     className = "",
                                 }) {
    return (
        <div
            className={cn(
                "w-fit flex items-start justify-start py-3.5 px-[13px] gap-1.5 rounded-[10px] shadow-md cursor-pointer",
                bgColor,
                className,
            )}
            style={{width, height}}
        >
            <img src={Imgsrc} alt="Bed Icon" className={'w-[30px] h-[30px]'}/>
            <label className="text-[20px] font-semibold text-white">{value}</label>
        </div>
    );
}
