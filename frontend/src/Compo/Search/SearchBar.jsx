import React from "react";
import {Search} from "lucide-react";


export default function SearchBar() {

    return (
        <div className={'w-[500px] flex items-center justify-center p-4'}>
            <div className={'w-full h-[72px] custom-black rounded-[10px] flex items-center justify-between px-4'}>
                <Search className="w-5 h-5" color="#B0B0B0"/>

                <input type="text"
                       placeholder={'Search...'}
                       className={'w-full h-full text-[var(--custom-text-gray)] bg-transparent outline-none text-[16px] ml-[18px] font-light placeholder:text-[var(--custom-text-gray)]'}
                />
            </div>
        </div>
    )


}