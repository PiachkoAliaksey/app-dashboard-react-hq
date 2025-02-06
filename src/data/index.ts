export const dataCharts: Record<string, {}[]> = {
    yellow_bot: [
        { name: '22.04', sales: Math.floor(Math.random() * 10000) },
        { name: '23.04', sales: Math.floor(Math.random() * 10000) },
        { name: '25.04', sales: Math.floor(Math.random() * 10000) },
        { name: '26.04', sales: Math.floor(Math.random() * 10000) },
    ],
    white_bot: [
        { name: '22.04', sales: Math.floor(Math.random() * 10000) },
        { name: '23.04', sales: Math.floor(Math.random() * 10000) },
        { name: '25.04', sales: Math.floor(Math.random() * 10000) },
        { name: '26.04', sales: Math.floor(Math.random() * 10000) },
    ],
    green_bot: [
        { name: '22.04', sales: Math.floor(Math.random() * 10000) },
        { name: '23.04', sales: Math.floor(Math.random() * 10000) },
        { name: '25.04', sales: Math.floor(Math.random() * 10000) },
        { name: '26.04', sales: Math.floor(Math.random() * 10000) },
    ],
    red_bot: [
        { name: '22.04', sales: Math.floor(Math.random() * 10000) },
        { name: '23.04', sales: Math.floor(Math.random() * 10000) },
        { name: '25.04', sales: Math.floor(Math.random() * 10000) },
        { name: '26.04', sales: Math.floor(Math.random() * 10000) },
    ],
    blue_bot: [
        { name: '22.04', sales: Math.floor(Math.random() * 10000) },
        { name: '23.04', sales: Math.floor(Math.random() * 10000) },
        { name: '25.04', sales: Math.floor(Math.random() * 10000) },
        { name: '26.04', sales: Math.floor(Math.random() * 10000) },
    ],
    orange_bot: [
        { name: '22.04', sales: Math.floor(Math.random() * 10000) },
        { name: '23.04', sales: Math.floor(Math.random() * 10000) },
        { name: '25.04', sales: Math.floor(Math.random() * 10000) },
        { name: '26.04', sales: Math.floor(Math.random() * 10000) },
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