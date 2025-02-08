import { ReactNode } from "react"

export type TBarBots = {
    handlerClickBot:(bot: string | number) => void,
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
    handlerClickInterval:(interval: string) => void ,
    currentInterval: string
}

export type TCardFooter = {
    title: string,
    icon: ReactNode,
    currentCard: string,
    setCurrentCard: React.Dispatch<React.SetStateAction<string>>
}