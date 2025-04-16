import {Eye} from "lucide-react";
import {Button} from "@/components/ui/button.jsx";
import React from "react";

export default function DefaulterCard (){
    return (row) => (
        <div
            className="w-full h-[230px] p-4 rounded-lg flex flex-col justify-between bg-[#1e1e1e] hover:bg-[#2a2a2a] transition text-white space-y-4">
            <div className="flex justify-between items-start mb-[30px]">
                <div className="flex items-center gap-2">
                    <img src={row.original.image} alt={row.original.name} className="w-8 h-8 rounded-full"/>
                    <span className="font-medium">{row.original.name}</span>
                </div>
                <div className="h-[32px] flex items-center justify-center">
                    <Eye className="w-5 h-5 text-gray-400"/>
                </div>
            </div>
            <p className="text-[16px] mb-[29px] font-light">{row.original.description}</p>
            <div className="flex items-center gap-4 text-sm text-white/90 mb-[15px]">
                <div className="flex items-center gap-2 border border-[#444] rounded-md px-3 py-1">
                    <span className="font-light text-[#B5B5B5]">Fine :</span>
                    <span className="font-light text-[#B5B5B5]">{row.original.fine}</span>
                </div>
                <div className="flex items-center gap-2 border border-[#444] rounded-md px-3 py-1">
                    <span>📅</span>
                    <span className="text-[#B5B5B5]">{row.original.date}</span>
                </div>
            </div>
            <div className="flex gap-3">
                <Button variant="outline"
                        className="bg-transparent border-[#F10606] text-[#F10606] hover:bg-red-500 hover:text-white hover:shadow-md">
                    Remove Defaulter
                </Button>
                <Button variant="outline"
                        className="bg-trasparent border-[#00FFF5] text-[#00FFF5] hover:bg-cyan-400 hover:text-black hover:shadow-md">
                    Send Payment Link
                </Button>
            </div>
        </div>
    );

}