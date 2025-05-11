export default function FurnitureOrders() {
    const orders = [
        {
            label: "Bed",
            title: "Neelkamal double bed with mattress",
            quantity: 245,
            price: "₹ 4,526",
        },
        {
            label: "Bed",
            title: "Neelkamal double bed with mattress",
            quantity: 245,
            price: "₹ 4,526",
        },
        {
            label: "Bed",
            title: "Neelkamal double bed with mattress",
            quantity: 245,
            price: "₹ 4,526",
        },
        {
            label: "Bed",
            title: "Neelkamal double bed with mattress",
            quantity: 245,
            price: "₹ 4,526",
        },
    ]
    return (
        <div className="w-full h-[495px] bg-surface rounded-xl p-4 flex flex-col gap-4 overflow-y-auto">
            {/* Header */}
            <div className="w-fit flex items-center justify-center text-black font-semibold text-xl gap-2">
                <span>Orders</span>
                <img src="/src/assets/navigate-icon/black-navi.svg" alt="link icon" className="w-[12px] h-[12px]"/>
            </div>

            {/* List */}
            {orders.map((item, index) => (
                <div
                    key={index}
                    className="w-full h-[80px] bg-black rounded-lg px-4 py-3 flex items-center justify-between text-white gap-5"
                >
                    <div className={'w-full flex items-end justify-between'}>
                        {/* Info */}
                        <div className="flex flex-col">
                            <span className="text-[16px] text-gray-400">{item.label}</span>
                            <span className="text-xl font-light truncate max-w-[230px]">{item.title}</span>
                        </div>

                        {/* Quantity + Price */}
                        <div className="flex items-end gap-4">
                            <span className="text-xl font-light">{item.quantity}</span>
                            <span className=" text-xl font-light">{item.price}</span>
                        </div>
                    </div>
                    {/* Details button */}
                    <button
                        className="w-[120px] h-[40px] px-4 py-1 border border-cyan-300 rounded-md text-cyan text-sm font-medium hover:bg-cyan-950 transition">
                        Details
                    </button>
                </div>
            ))}
        </div>
    )
}