import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import Header from './components/sheared/Header/Header';
import Home from './components/pages/Home/Home';
import Doctors from './components/pages/Doctors/Doctors';
import Services from './components/pages/Services/Services';
import Login from './components/pages/Login/Login';
import Registation from './components/pages/Registation/Registation';
import Appointment from './components/pages/Appointment/Appointment';
import Contact from './components/pages/Contact/Contact';
import About from './components/pages/About/About';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Singleservice from './components/pages/SingleService/Singleservice';
import Footer from './components/sheared/Footer/Footer';
import NotFound from './components/pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
        <AuthProvider>
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
            <PrivateRoute exact path="/singleservice/:id">
              <Singleservice></Singleservice>
            </PrivateRoute>
            <Route exact path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/registration">
              <Registation></Registation>
            </Route>
            <Route exact path="/appointment">
              <Appointment></Appointment>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
        </AuthProvider>
             
            
            
    </div>
  );
}

export default App;
