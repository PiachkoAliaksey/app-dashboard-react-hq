
import './App.css';
import NavBar from './components/NavBar';
import BlockBTC from './components/BlockBTC';
import ChartsArea from './components/ChartsArea';
import BarBots from './components/BarBots';
import SwitchBar from './components/SwitchBar';
import BarFooter from './components/BarFooter';




function App() {
  return (
    <div className='flex relative flex-col h-screen bg-sky-950 text-green-100 font-[Open_Sans]'>
      <NavBar />
      <BlockBTC />
      <ChartsArea />
      <BarBots />
      <SwitchBar />
      <BarFooter />
    </div>
  )
}

export default App;
