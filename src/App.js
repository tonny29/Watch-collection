import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Explore from './pages/Explore/Explore/Explore';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
              <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/explore'>
            <Explore></Explore>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
