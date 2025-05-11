import {cn} from "@/lib/utils.js";

export default function ExpenseLabelCard(
    {
        width = "235px",
        height = "105px",
        bgColor = "bg-black",
        label = "Highest Expense",
        item = "Beds",
        value = '₹ 24, 45, 685',
        valueColor = 'text-white'

    }
) {
    return (
        <div
            className={cn(
                'w-[235px] h-[105px] flex flex-col items-start justify-between border-[.5px] border-bg-gray-light rounded-xl p-2.5', bgColor
            )}
            style={{width, height}}
        >
            <label className={'text-[14px] text-gray-dark font-extralight'}>{label}</label>
            <span className={'text-[16px] text-white font-medium'}>{item}</span>
            <span className={cn('text-[20px] text-pink', valueColor)}>{value}</span>
        </div>
    )
}