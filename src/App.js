import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import Header from './components/sheared/Header/Header';
import Home from './components/pages/Home/Home';
import Doctors from './components/pages/Doctors/Doctors';
import Services from './components/pages/Services/Services';
import Footer from './components/pages/Footer/Footer';
import Login from './components/pages/Login/Login';
import Registation from './components/pages/Registation/Registation';

function App() {
  // const element = <FontAwesomeIcon icon={faCoffee} />
  return (
    <div className="App">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/registration">
              <Registation></Registation>
            </Route>
            
          </Switch>
          <Footer></Footer>
        </Router>
             
            
            
    </div>
  );
}

export default App;
