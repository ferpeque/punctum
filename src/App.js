//import logo from './logo.svg';
// siempre se importa react from react 

import { Navbar } from './Components/NavBar/NavBar'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div>   
        <Navbar/>
        <ItemListContainer/>
    </div>
  );
}

export default App;
