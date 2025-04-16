export default function WashroomSummary({value}) {
    return (
        <div className={'custom-black w-[103px] h-[58px] gap-1.5 p-2 flex items-center justify-start rounded-[10px] shadow-md'}>
            <img src={'/src/assets/room-cards-icons/washroom.svg'} alt={'Washroom Icon'}/>
            <label className={'text-[20px] text-white'}>{value}</label>
        </div>
    )
}