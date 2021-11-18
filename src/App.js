import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './pages/contexts/AuthProvider/AuthProvider';
import BuyWatch from './pages/Dashboard/BuyWatch/BuyWatch';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Explore from './pages/Explore/Explore/Explore';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Register from './pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/BuyWatch/:id'>
              <BuyWatch></BuyWatch>
            </PrivateRoute>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>

            <Route path='/explore'>
              <Explore></Explore>
            </Route>
          </Switch>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
