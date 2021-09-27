import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import { Switch , Route  } from 'react-router';
import Profile from './Components/Profile/Profile';
import Form from './Components/form/form';
import Contact from './Components/contact/contact';

function App() {
  return (
    <div className="App" style={{width:'100vw' , overFlow:'hidden'}}>
      {/* <Homepage></Homepage> */}

      <Switch>
        <Route path="/" exact component={Homepage}></Route>
        <Route path="/profile" exact component={Profile} ></Route> 
        <Route path="/reach" exact  ></Route> 
        <Route path="/academics" exact  ></Route> 
        <Route path="/admForm" exact  component = {Form}></Route> 
        <Route path="/contact" exact  component = {Contact}></Route> 
      </Switch>
    </div>
  );
}

export default App;
