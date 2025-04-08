import React from "react";
import ComplaintsChart from "@/compo/Charts/ComplaintsChart.jsx";

export default function ComplaintsSummaryChart() {
    return (

        <div
            className="custom-gray w-[1000px] h-[175px] rounded-[10px] p-4 flex items-baseline justify-center shadow-md">

            <div className="max-w-full w-full flex justify-center gap-6 items-center p-2">

                {/*<Complaints Chart/>*/}

                <ComplaintsChart/>

                {/*<Fee Data Divs/>*/}

                {
                    [
                        {icon: 'white', label: 'Total Complaints', color: '#FFFFFF', amount: '158'},
                        {icon: 'white', label: 'Resolved', color: '#00FFF5', amount: '96'},
                        {icon: 'white', label: 'Open', color: '#FFE605', amount: '57'},
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="custom-black w-[223px] h-[79px] rounded-[10px] px-6 py-2 flex items-center justify-between shadow-md"
                        >
                            <div className="flex flex-col justify-start">
                                <div className={'w-auto flex items-center '}>
                                    <span className="text-[16px] font-light text-white">{item.label}</span>
                                    <img
                                        src={`/src/assets/complaints-summary-icons/${item.icon}.svg`}
                                        alt={`${item.label} Icon`}
                                        width={16}
                                        height={16}
                                        className="m-[8px]"
                                    />
                                </div>
                                <span className="text-xl font-light"
                                      style={{color: item.color}}>{item.amount}</span>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );

}