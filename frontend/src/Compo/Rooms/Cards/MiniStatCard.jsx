export default function MiniStatCard(
    {
        imgSrc = '',
        value,
    }
) {
    return (
        <div className={'w-[60px] h-[35px] bg-black flex items-center justify-center gap-1.5 p-1.5 rounded-md'}>
            <img src={imgSrc} alt={'Icon'} className={'w-5 h-5'}/>
            <span className={'text-[16px] font-light text-white'}>{value}</span>
        </div>
    )
}