import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Home from './Pages/HomePage/Home/Home';
import Login from './Pages/LoginRegister/Login/Login';
import PrivateRoute from './Pages/LoginRegister/PrivateRoute/PrivateRoute';
import Register from './Pages/LoginRegister/Register/Register';
import Navigation from './Pages/Shared/Navigation/Navigation';
import SingleProduct from './Pages/SingleProduct/SingleProduct';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/explore'>
              <Home></Home>
            </Route>
            <Route path='/products/:productId'>
              <SingleProduct></SingleProduct>
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
