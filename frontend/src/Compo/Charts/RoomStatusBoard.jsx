import React from 'react';
import {cn} from '@/lib/utils.js';

const roomNumbers = [
    ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110',
        '111', '112', '113', '114', '115', '116', '117', '118', '119', '120',
        '121', '122', '123', '124', '125', '126', '127', '128', '129', '130',
        '131', '132', '133', '134', '135', '136', '137', '138', '139', '140',
        '141', '142', '143', '144', '145', '146', '147', '148', '149', '150',
        '151', '152', '153', '154', '155', '156', '157', '158', '159', '160',
        '161', '162', '163', '164', '165', '166', '167', '168', '169', '170']
];

const roomStatus = {
    101: 'occupied',
    103: 'available',
    108: 'occupied',
    115: 'available',
    122: 'occupied',
    134: 'available',
    136: 'occupied',
    144: 'available',
    150: 'occupied',
    153: 'available',
    161: 'occupied',
    168: 'available',
};

const getStatusColor = (room) => {
    const status = roomStatus[room];
    if (status === 'available') return 'bg-cyan';
    if (status === 'occupied') return 'bg-red';
    else return 'bg-black';
}

export default function RoomStatusBoard() {
    return (
        <div className="w-full flex flex-wrap gap-3 bg-transparent rounded-xl mt-[38px]">
            {roomNumbers.flat().map((room) => (
                <div
                    key={room}
                    className={cn(
                        "w-[55px] h-[35px] flex items-center justify-center rounded-md text-white text-[14px] font-medium cursor-pointer",
                        getStatusColor(room)
                    )}
                >
                    {room}
                </div>
            ))}
        </div>

    )
}

