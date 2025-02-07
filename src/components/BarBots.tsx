import dataBots from '../data/data.min.json';

import CardBot from './CardBot';
import { useLocalStorage } from '../hooks/useLocalStorage';


const BarBots = () => {
    const [currentInterval] = useLocalStorage('interval', 'all_time');
    const [currentBot,setCurrentBot] = useLocalStorage('bot', 'yellow_bot');

    const handlerClickBot = (bot: string|number ) => {
        setCurrentBot(bot)
    }

    return (
        <div className="w-full mt-4 h-fit px-4 grid grid-cols-3 gap-1">
            {dataBots.bots.map((item) => {
                return (
                    <CardBot currentBot={currentBot} handlerClickBot={handlerClickBot} key={item.name} item={item} currentInterval={currentInterval} />)
            })}
        </div>
    )
}

export default BarBots;