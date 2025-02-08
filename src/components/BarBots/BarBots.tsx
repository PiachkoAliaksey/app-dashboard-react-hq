
import { TBarBots } from '../../types';

import CardBot from './CardBot';


const BarBots = ({ isLoading, dataBots, handlerClickBot, currentBot, currentInterval }: TBarBots) => {

    return (
        <div className="w-full mt-4 h-fit px-4 grid grid-cols-3 gap-1">
            {!isLoading ? dataBots?.bots.map((item) => {
                return (
                    <CardBot currentBot={currentBot} handlerClickBot={handlerClickBot} key={item.name} item={item} currentInterval={currentInterval} />)
            }) : <div className='min-h-[226px] px-4 w-full flex items-center justify-center text-xl'>Loading...</div>}
        </div>
    )
}

export default BarBots;