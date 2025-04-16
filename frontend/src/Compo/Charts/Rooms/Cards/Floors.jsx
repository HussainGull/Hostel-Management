export default function Floors({value}) {
    return (
        <div className={'custom-black w-[86px] h-[77px] flex flex-col items-start p-3 justify-center rounded-[10px] shadow-md'}>
            <label className={'text-[16px] text-white font-light'}>Floors</label>
            <label className={'text-[20px]  text-white font-semibold'}>{value}</label>
        </div>
    )
}