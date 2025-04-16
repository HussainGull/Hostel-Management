export default function Occupied({value}) {
    return (
        <div className={'custom-black w-[110px] h-[77px] flex flex-col items-start p-3 justify-center rounded-[10px] shadow-md'}>
            <label className={'text-[16px] text-white font-light'}>Occupied</label>
            <label className={'text-[20px] font-semibold text-[var(--custom-yellow)]'}>{value}</label>
        </div>
    )
}