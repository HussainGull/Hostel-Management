"use client"

import React, {useEffect, useState} from "react"

export default function ComplaintsChart() {
    const [progress, setProgress] = useState(13)

    useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className={'w-auto flex flex-col gap-y-[16px]'}>
            <div className={'w-auto flex items-center justify-start cursor-pointer'}>
                <label className={'text-[20px] font-semibold text-white cursor-pointer'}>Complaints</label>
                <img src={`/src/assets/navigate-icon/white-navi.svg`}
                     alt={'Collection Icon'}
                     className={'w-[12px] h-[12px] ml-2'}
                />
            </div>
            <div className="w-[225px] h-[81px] bg-yellow-400 rounded-[10px] overflow-hidden flex items-center">
                <div
                    className="h-full bg-cyan-300 border-l-0 transition-all duration-500 ease-in-out"
                    style={{width: `${progress}%`}}
                />
            </div>
        </div>
    )
}
