import MiniCollectionChart from "@/Compo/Charts/MiniCollectionChart.jsx";

export default function MiniCollectionSummaryChart() {
    return (
        <div className={'w-fit h-[270px] bg-black flex items-center justify-start rounded-xl p-5'}>
            <MiniCollectionChart/>
            <div className={'w-fit grid grid-cols-2 items-center justify-center gap-6'}>
                {
                    [{icon: 'white', label: 'Expected', textColorClass: 'text-white', price: '₹ 6,58,000'},
                        {icon: 'yellow', label: 'Collected', textColorClass: 'text-cyan', price: '₹ 1,54,500'},
                        {icon: 'cyan', label: 'Due', textColorClass: 'text-yellow', price: '₹ 3,00,000'},
                        {icon: 'red', label: 'Overdue', textColorClass: 'text-pink', price: '₹ 2,04,000'},
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={'w-fit flex flex-col items-start justify-center'}>
                            <label className={'text-[16px] font-light text-white'}>{item.label}</label>
                            <span className={`text-[20px] font-semibold ${item.textColorClass}`}>{item.price}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}