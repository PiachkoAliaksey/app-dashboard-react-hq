export type TBarBots = {
    setCurrentBot:React.Dispatch<React.SetStateAction<string | number>>,
    currentBot:string|number,
    currentInterval:string
}

export type TItem = {
    item: { [key: string]: string|number},
    currentInterval: string,
    handlerClickBot: (bot: string|number) => void,
    currentBot:string|number
}

export type TSwitchBar = {
    setCurrentInterval: React.Dispatch<React.SetStateAction<string|number>>,
    currentInterval: string
}