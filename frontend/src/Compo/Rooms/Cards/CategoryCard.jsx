import {MoveRight} from 'lucide-react';

export default function CategoryCard(
    {
        label,
        value
    }
) {
    return (
        <div className={'w-[185px] h-[75px] bg-black flex flex-col items-start p-2.5 justify-between rounded-xl'}>
            <label className={'text-[16px] text-gray-dark font-light'}>{label}</label>
            <div className={'w-full flex items-center justify-between'}>
                <span className={'text-[24px] text-white font-light'}>{value}</span>
                <MoveRight color="#ffffff"/>
            </div>

        </div>
    )
}