export default function KitchenSummary({value}) {
    return (
        <div className={'custom-black w-[103px] h-[58px] flex p-0.5 gap-2 items-center justify-center rounded-[10px] shadow-md'}>
            <img src={'/src/assets/room-cards-icons/kitchen.svg'} alt={'Kitchen Icon'}/>
            <label className={'text-[20px] text-white'}>{value}</label>
        </div>
    )
}