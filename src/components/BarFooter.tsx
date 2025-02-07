import { dataBarFooter } from "../data";

const BarFooter = () => {
    return (
        <div className='w-full mt-4 h-fit bg-gray-700/50 px-4 py-2 grid grid-cols-5 gap-2'>
            {dataBarFooter.map((item) => (
                <div key={item.title} className='relative flex flex-col gap-1 items-center opacity-50'>
                    {item.icon}
                    <span className='text-[10px]'>{item.title}</span>
                    {item.title==='Profile'&&<span className="absolute  top-[-8px] right-[9px] w-5  h-5 bg-lime-400 rounded-full flex items-center justify-center text-[14px]">3</span>}
                </div>
            ))}
        </div>
    )
}

export default BarFooter;