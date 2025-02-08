import { dataInterval } from "../data";
import { mapDataInterval } from "../data";
import { TSwitchBar } from "../types";


const SwitchBar = ({ currentInterval, handlerClickInterval }: TSwitchBar) => {


    return (
        <div className='w-full mt-4 h-fit px-4 flex gap-2 items-center'>
            <span className='opacity-50 text-[12px] md:text-xl '>Time Range:</span>
            {dataInterval.map((item) => (
                <div key={item} onClick={() => handlerClickInterval(mapDataInterval[item])} className={`px-2 py-1 rounded-xl w-[53px] border-2 text-[10px] opacity-50 flex items-center justify-center cursor-pointer transition-all ${currentInterval === mapDataInterval[item] ? 'opacity-100' : ''}`}>{item}</div>
            ))}
        </div>
    )
}

export default SwitchBar;