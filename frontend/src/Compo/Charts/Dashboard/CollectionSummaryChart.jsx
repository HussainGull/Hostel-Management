import React from "react";
import CollectionChart from "@/Compo/Charts/Dashboard/CollectionChart.jsx";


export default function CollectionSummaryChart() {
    return (
        <div
            className="custom-gray w-full h-[320px] p-4 rounded-[10px] flex items-center justify-between">
            <div className="max-w-full w-full flex gap-x-[50px]  justify-between items-center">

                {/*<Categorized Chart/>*/}=
                
                <CollectionChart/>

                {/*<Fee Data Divs/>*/}
                <div
                    className="max-w-full w-full flex flex-wrap gap-5 justify-center mt-4 p-4">
                    {
                        [
                            {icon: 'white', label: 'Expected', color: '#FFFFFF', price: '₹ 52,000'},
                            {icon: 'yellow', label: 'Remaining', color: '#FFE605', price: '₹ 15,60,000'},
                            {icon: 'cyan', label: 'Collected', color: '#00FFF5', price: '₹ 26,00,000'},
                            {icon: 'red', label: 'Overdue', color: '#FF05C8', price: '₹ 10,40,000'},
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="custom-black w-[320px] h-[79px] rounded-[10px] px-6 py-2 flex items-center justify-between shadow-md"
                            >
                                <div className="flex flex-col">
                                    <span className="text-sm font-light text-white">{item.label}</span>
                                    <span className="text-xl font-light" style={{color: item.color}}>{item.price}</span>
                                </div>

                                <img
                                    src={`/src/assets/collection-summary-icons/${item.icon}.svg`}
                                    alt={`${item.label} Icon`}
                                    width={22}
                                    height={22}
                                    className=" ml-4 cursor-pointer"
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );

}
