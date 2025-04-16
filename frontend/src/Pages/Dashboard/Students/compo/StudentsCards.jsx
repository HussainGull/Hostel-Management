import React from "react";


export default function StudentsCards() {

    const studentCards = [
        {
            icon: 'white-navi',
            label: 'Total Students',
            color: '#FFFFFF',
            amount: '2783'
        },
        {
            icon: 'white-navi',
            label: 'In Hostel',
            color: '#00FFF5',
            amount: '1500'
        },
        {
            icon: 'white-navi',
            label: 'Outside Hostel',
            color: '#B0B0B0',
            amount: '2500'
        },
        {
            icon: 'white-navi',
            label: 'Students Assigned',
            color: '#FF05C8',
            amount: '900'
        },
        {
            icon: 'white-navi',
            label: 'Students Removed',
            color: '#F10606',
            amount: '1000'
        },
        {
            icon: 'white-navi',
            label: 'Fees Defaulters',
            color: '#FFE605',
            amount: '1000',
            description: 'View List'
        },
    ]

    return (

        <div className="custom-gray w-full max-w-full p-4 rounded-[10px]">
            <div className="w-auto flex flex-wrap gap-5 p-2 items-center justify-center">
                {studentCards.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-black text-white w-[225px] h-[80px] rounded-[10px] px-6 py-2 flex items-center justify-between shadow-md"
                    >
                        <div className="flex flex-col">
                            <span className="text-sm font-light">{item.label}</span>
                            <span className="text-xl font-light" style={{color: item.color}}>
                        {item.amount}
                    </span>
                        </div>
                        <img
                            src={`/src/assets/navigate-icon/${item.icon}.svg`}
                            alt={`${item.label} Icon`}
                            width={16}
                            height={16}
                            className="ml-4 cursor-pointer"
                        />
                    </div>
                ))}
            </div>
        </div>


    )
}