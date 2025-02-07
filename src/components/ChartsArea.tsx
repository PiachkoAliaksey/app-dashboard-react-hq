import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { dataCharts } from '../data';
import { useLocalStorage } from '../hooks/useLocalStorage';


const ChartsArea = () => {
    const [currentBot] = useLocalStorage('bot', 'yellow_bot');

    return (
        <div className='h-50 w-full'>
            <ResponsiveContainer width={'100%'} height={'100%'}>
                <AreaChart data={dataCharts[currentBot]}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>

                    </defs>
                    <CartesianGrid strokeDasharray={'3 3'} stroke='rgba(194,194,194,0.1)' />
                    <XAxis dataKey={'name'} stroke='rgba(194,194,194,0.2)' />
                    <Tooltip contentStyle={{
                        background: 'rgba(31, 41, 55, 0.8)',
                        borderColor: '#4B5563'
                    }} itemStyle={{ color: '#E5E7EB' }} />
                    <Area type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={'2'} fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ChartsArea