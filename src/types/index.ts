import { ReactNode } from "react";

export type TBarBots = {
    handlerClickBot: (bot: string | number) => void,
    currentBot: string | number,
    currentInterval: string,
    dataBots:TDataBots|undefined,
    isLoading:boolean
}

export type TDataBots = {
    trading_capital: number,
    trading_capital_currency: string,
    balance: number,
    on_hold: number,
    bots: TBot[]
}

type TBot = {
    name: string,
    cost: number,
    "24h": number,
    "7d": number,
    "30d": number,
    "60d": number,
    "90d": number,
    "all_time": number
}

export type TItem = {
    item: { [key: string]: string | number },
    currentInterval: string,
    handlerClickBot: (bot: string | number) => void,
    currentBot: string | number
}

export type TSwitchBar = {
    handlerClickInterval: (interval: string) => void,
    currentInterval: string
}

export type TCardFooter = {
    title: string,
    icon: ReactNode,
    currentCard: string,
    setCurrentCard: React.Dispatch<React.SetStateAction<string>>
}