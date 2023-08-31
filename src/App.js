
import './App.css';
import { ItemListContainer } from './components/itemListContainer';
import { BarraDeNav } from './components/Navbar';
import { ItemCount } from './components/ItemCount';


function App() {
  return (
    <>
   <BarraDeNav/>
   <ItemCount/>
    <ItemListContainer greeting="hola tu "/>
    
    </>
  );
}

export default App;
