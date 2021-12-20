import './App.css';
import {useContext} from 'react'
import { ItemContextProvider } from './context/itemContext';
import { ItemContext } from './context/itemContext';
import AllProducts from './components/AllProducts';


function App() {
  // const {storeItems} = useContext(ItemContext)
    // console.log(storeItems);


  return (
    <ItemContextProvider>
    <div className="App">
      <AllProducts />
    </div>
    </ItemContextProvider>
  );
}

export default App;
