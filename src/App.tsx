
import './App.css';
import NavBar from './components/NavBar';
import BlockBTC from './components/BlockBTC';
import ChartsArea from './components/ChartsArea';
import BarBots from './components/BarBots';
import SwitchBar from './components/SwitchBar';
import { useState } from 'react';



function App() {
  const [currentInterval, setCurrentInterval] = useState('all_time');
  const [currentBot, setCurrentBot] = useState<string|number>('yellow_bot');

    

  return (
    <div className='flex flex-col h-screen bg-sky-950 text-green-100 overflow-hidden font-[Open_Sans]'>
      <NavBar />
      <BlockBTC />
      <ChartsArea currentBot={currentBot}  />
      <BarBots currentBot={currentBot} setCurrentBot={setCurrentBot} currentInterval={currentInterval} />
      <SwitchBar currentInterval={currentInterval} setCurrentInterval={setCurrentInterval} />
    </div>
  )
}

export default App
