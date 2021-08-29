//import logo from './logo.svg';
// siempre se importa react from react 

import { Navbar } from './Components/NavBar/NavBar'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Switch,  Route, Redirect } from "react-router-dom"


function App() {
  return (

    <BrowserRouter> 

    <div>   
      <Navbar/>

      <Switch> 

          <Route exact path='/'> 
            <h2>// iniccio </h2>
          </Route>  

          <Route  exact  path='/productos'> 
            <ItemListContainer/>
          </Route>

          <Route  exact  path='/category/:catId'> 
            <ItemListContainer/>
          </Route>

          
          <Route  exact  path='/detail/:itemId'> 
            <ItemDetailContainer/>
          </Route>

          
          <Route  exact  path='/nosotros'> 
          <h1> Nosotros </h1>
          </Route>


          <Route  path='*'> 
            <Redirect to='/'/>
          </Route>

      </Switch>
    </div>

    </BrowserRouter>

  );
}

export default App;
