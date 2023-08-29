import './App.css';
import Bayan from './components/bayan/bayan';
import Navbar from './components/navbar/navbar';
import Quran from './components/quran/quran';
import { Makkah } from './utils/image';

function App() {
  return (
    <div className="App">
     <Navbar/>
      <img src={Makkah} alt="" className='w-100' />
      <Bayan/>
      <Quran/>
    </div>
  );
}

export default App;
