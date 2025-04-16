export default function BedSummary({value}) {
    return (
        <div className={'custom-black w-[135px] h-[58px] p-2 flex items-center gap-1.5 justify-start rounded-[10px] shadow-md'}>
            <img src={'/src/assets/room-cards-icons/bed.svg'} alt={'Bed Icon'}/>
            <label className={'text-[20px] text-white'}>{value}</label>
        </div>
    )
}