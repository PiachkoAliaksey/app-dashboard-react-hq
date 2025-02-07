import { useState } from "react";
import { dataBarFooter } from "../../data";
import CardFooter from "./CardFooter";

const BarFooter = () => {
const [currentCard,setCurrentCard] = useState('Dashboard')

    return (
        <div className='w-full mt-4 h-fit bg-gray-700/50 px-4 py-2 grid grid-cols-5 gap-2'>
            {dataBarFooter.map((item) => (
                <CardFooter key={item.title} currentCard={currentCard} title={item.title} icon={item.icon} />
            ))}
        </div>
    )
}

export default BarFooter;