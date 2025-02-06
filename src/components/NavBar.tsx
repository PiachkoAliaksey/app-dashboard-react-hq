import { AlignJustify, RefreshCcw } from 'lucide-react';

const NavBar = () => {
    return (
        <div className='w-full h-fit pt-5 px-4 flex gap-2 items-center justify-between'>
            <div><AlignJustify className='cursor-pointer opacity-50' /></div>
            <h1 className='text-xl font-bold opacity-50'>Dashboard</h1>
            <div><RefreshCcw className='cursor-pointer opacity-50' /></div>
        </div>
    )
}

export default NavBar