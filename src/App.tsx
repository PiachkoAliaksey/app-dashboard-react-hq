
import './App.css';
import NavBar from './components/NavBar';
import BlockBTC from './components/BlockBTC';
import ChartsArea from './components/ChartsArea';
import BarBots from './components/BarBots/BarBots';
import SwitchBar from './components/SwitchBar';
import BarFooter from './components/BarFooter/BarFooter';
import { useLocalStorage } from './hooks/useLocalStorage';




function App() {
  const [currentInterval,setCurrentInterval] = useLocalStorage('interval', 'all_time');
  const [currentBot, setCurrentBot] = useLocalStorage('bot', 'yellow_bot');


  return (
    <div className='flex relative flex-col h-screen bg-sky-950 text-green-100 font-[Open_Sans]'>
      <NavBar />
      <BlockBTC />
      <ChartsArea currentBot={currentBot} />
      <BarBots setCurrentBot={setCurrentBot} currentBot={currentBot} currentInterval={currentInterval} />
      <SwitchBar currentInterval={currentInterval} setCurrentInterval={setCurrentInterval} />
      <BarFooter />
    </div>
  )
}

export default App;
