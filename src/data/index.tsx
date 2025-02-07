import { List, ChartNetwork, ShoppingCart, CircleDollarSign, Cog } from 'lucide-react';
import { generateSale } from '../utils/generateSales';

import yellow_bot from '../assets/bot/yellow_bot.png';
import red_bot from '../assets/bot/red_bot.png';
import green_bot from '../assets/bot/green_bot.png';
import orange_bot from '../assets/bot/orange_bot.png';
import blue_bot from '../assets/bot/blue_bot.png';
import white_bot from '../assets/bot/purple_bot.png';

export const dataCharts: Record<string, {}[]> = {
    yellow_bot: [
        { name: '22.04', sales: generateSale() },
        { name: '23.04', sales: generateSale() },
        { name: '25.04', sales: generateSale() },
        { name: '26.04', sales: generateSale() },
    ],
    white_bot: [
        { name: '22.04', sales: generateSale() },
        { name: '23.04', sales: generateSale() },
        { name: '25.04', sales: generateSale() },
        { name: '26.04', sales: generateSale() },
    ],
    green_bot: [
        { name: '22.04', sales: generateSale() },
        { name: '23.04', sales: generateSale() },
        { name: '25.04', sales: generateSale() },
        { name: '26.04', sales: generateSale() },
    ],
    red_bot: [
        { name: '22.04', sales: generateSale() },
        { name: '23.04', sales: generateSale() },
        { name: '25.04', sales: generateSale() },
        { name: '26.04', sales: generateSale() },
    ],
    blue_bot: [
        { name: '22.04', sales: generateSale() },
        { name: '23.04', sales: generateSale() },
        { name: '25.04', sales: generateSale() },
        { name: '26.04', sales: generateSale() },
    ],
    orange_bot: [
        { name: '22.04', sales: generateSale() },
        { name: '23.04', sales: generateSale() },
        { name: '25.04', sales: generateSale() },
        { name: '26.04', sales: generateSale() },
    ],
}

export const dataInterval = ['24h', '7 days', '30 days', 'All time'];


export const mapDataInterval: Record<string, string> = {
    '24h': '24h',
    '7 days': '7d',
    '30 days': '30d',
    'All time': 'all_time',
}

export const mapNameBots: Record<string, string> = {
    "yellow_bot": "YELLOW BOT",
    "white_bot": "WHITE BOT",
    "green_bot": "GREEN BOT",
    "red_bot": "RED BOT",
    "blue_bot": "BLUE BOT",
    "orange_bot": "ORANGE BOT",
}

export const mapNameBotsColor: Record<string, string> = {
    "yellow_bot": "text-yellow-600",
    "white_bot": "text-white-100",
    "green_bot": "text-green-600",
    "red_bot": "text-red-700",
    "blue_bot": "text-blue-600",
    "orange_bot": "text-orange-600",
}




export const dataBarFooter = [{ title: 'Dashboard', icon: <List /> }, { title: 'Megabot', icon: <ChartNetwork /> }, { title: 'Botmarket', icon: <ShoppingCart /> }, { title: 'Coin prices', icon: <CircleDollarSign /> }, { title: 'Profile', icon: <Cog /> }]

export const mapBotImage:Record<string, string> = {
    "yellow_bot": yellow_bot,
    "white_bot": white_bot,
    "green_bot": green_bot,
    "red_bot": red_bot,
    "blue_bot": blue_bot,
    "orange_bot": orange_bot,
}