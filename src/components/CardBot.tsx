import { isRedColor } from '../utils/isRedColor';
import { TItem } from '../types';
import { mapNameBots,mapNameBotsColor } from '../data';


const CardBot = ({ item, currentInterval, handlerClickBot,currentBot }: TItem) => {

    return (
        <div onClick={() => handlerClickBot(item.name)} className={`p-5 min-h-[111px] rounded-xs bg-gray-700/50 flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${currentBot===item.name?'bg-gray-700/80':''}`}>
            <h4 className={`text-[10px] font-semibold ${mapNameBotsColor[item.name]}`}>{mapNameBots[item.name]}</h4>
            <span className={`font-semibold text-orange-400 ${isRedColor(item[currentInterval]) ? 'text-red-800' : ''}`} >{item[currentInterval]} %</span>
        </div>
    )
}

export default CardBot