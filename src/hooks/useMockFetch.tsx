import { useEffect, useState } from 'react';
import dataBots from '../data/data.min.json';
import { TDataBots } from '../types';

const useDataFetch = () => {
    const [data, setData] = useState<TDataBots>();
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);

        new Promise((resolve: (value: { status: number, data: { data: TDataBots } }) => void) => {
            setTimeout(() => {
                const response = {
                    status: 200,
                    data: { data: dataBots },
                };
                resolve(response)
            }, 1000)
        }).then((res) => {
            setData(res.data.data)
        }).finally(() => setIsLoading(false))

    }

    useEffect(() => {
        fetchData()
    }, [])

    return [isLoading, data] as [boolean,TDataBots | undefined]
}

export default useDataFetch;