import { TCardFooter } from '../../types'

const CardFooter = ({ title, icon, currentCard, setCurrentCard }:TCardFooter) => {
    return (
        <div onClick={() => setCurrentCard(title)} className={`relative flex flex-col gap-1 items-center opacity-50 cursor-pointer ${currentCard === title && 'opacity-100'}`}>
            <div className="relative flex items-center">
                {icon}
                {title === 'Profile' && <span className="absolute  top-[-8px] right-[-8px] w-5  h-5 bg-lime-500 rounded-full flex items-center justify-center text-[14px]">3</span>}
            </div>
            <span className='text-[10px]'>{title}</span>
        </div>
    )
}

export default CardFooter