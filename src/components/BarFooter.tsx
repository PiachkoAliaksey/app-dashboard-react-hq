import React from 'react';
import { List, ChartNetwork, ShoppingCart, CircleDollarSign, Cog } from 'lucide-react';

const dataBarFooter = [{ title: 'Dashboard', icon: <List /> }, { title: 'Megabot', icon: <ChartNetwork /> }, { title: 'Botmarket', icon: <ShoppingCart /> }, { title: 'Coin prices', icon: <CircleDollarSign /> }, { title: 'Profile', icon: <Cog /> }]

const BarFooter = () => {
    return (
        <div className='w-full mt-4 h-fit bg-gray-700/50 px-4 py-2 grid grid-cols-5 gap-2'>
            {dataBarFooter.map((item) => (
                <div className='flex flex-col gap-1 items-center'>
                    {item.icon}
                    <span className='text-[10px]'>{item.title}</span>
                </div>
            ))}
        </div>
    )
}

export default BarFooter