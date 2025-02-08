
import './App.css';
import NavBar from './components/NavBar';
import BlockBTC from './components/BlockBTC';
import ChartsArea from './components/ChartsArea';
import BarBots from './components/BarBots/BarBots';
import SwitchBar from './components/SwitchBar';
import BarFooter from './components/BarFooter/BarFooter';
import { useLocalStorage } from './hooks/useLocalStorage';




function App() {
  const [currentInterval, setCurrentInterval] = useLocalStorage('interval', 'all_time');
  const [currentBot, setCurrentBot] = useLocalStorage('bot', 'yellow_bot');

  const handlerClickBot = (bot: string | number) => {
    setCurrentBot(bot)
  }

  const handlerClickInterval = (interval: string) => {
    setCurrentInterval(interval)
  }


  return (
    <div className='flex relative flex-col h-screen bg-sky-950 text-green-100 font-[Roboto]'>
      <NavBar />
      <BlockBTC />
      <ChartsArea currentBot={currentBot} />
      <BarBots handlerClickBot={handlerClickBot} currentBot={currentBot} currentInterval={currentInterval} />
      <SwitchBar currentInterval={currentInterval} handlerClickInterval={handlerClickInterval} />
      <BarFooter />
    </div>
  )
}

export default App;
