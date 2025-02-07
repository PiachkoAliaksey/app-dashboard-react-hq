import data from '../data/data.min.json';

const BlockBTC = () => {
    return (
        <div className='w-full mt-4 h-fit px-4 flex gap-2 flex-col '>
            <h2 className='font-bold uppercase text-md opacity-50'>Trading capital</h2>
            <div className='w-full flex gap-2 justify-between'>
                <span className='text-3xl flex text-white items-center w-1/2 md:text-5xl uppercase'>{data.balance} {data.trading_capital_currency}</span>
                <div className='w-1/2 flex flex-col gap-0.5 md:gap-2'>
                    <div className='flex gap-2 items-center justify-end'>
                        <span className='font-bold text-[12px] uppercase opacity-50 md:text-[18px]'>Balance:</span>
                        <p className='text-[14px] font-bold text-white md:text-[20px]'>{data.balance}</p>
                    </div>
                    <div className='flex gap-2 items-center justify-end'>
                        <span className='font-bold text-[12px] uppercase opacity-50 md:text-[18px]'>On hold:</span>
                        <p className='text-[14px] font-bold text-white md:text-[20px]'>{data.on_hold}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlockBTC