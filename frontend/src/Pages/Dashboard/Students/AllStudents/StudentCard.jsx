import {Eye} from "lucide-react";
import React from "react";

export default function StudentCard() {
    return (row) => (
        <div
            className="w-full h-[60px] flex items-center justify-between py-2 px-4 rounded-md bg-[#1e1e1e] hover:bg-[#2a2a2a] transition text-white">
            <div className="flex items-center gap-2">
                <img
                    src={row.original.image}
                    alt={row.original.name}
                    className="w-8 h-8 rounded-full"
                />
                <span>{row.original.name}</span>
            </div>
            <Eye className="w-5 h-5 text-gray-400"/>
        </div>
    );

}