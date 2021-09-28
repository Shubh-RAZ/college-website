import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import { Switch , Route  } from 'react-router';
import Profile from './Components/Profile/Profile';
import Form from './Components/form/form';
import Contact from './Components/contact/contact';
import History from './Components/LinksPage/OurHistory';
import Principals_note from './Components/LinksPage/principals_note';
import Purpose from './Components/LinksPage/purpose';
import Library from './Components/LinksPage/LibraryInstructions';

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
        <Route path="/history" exact  component = {History}></Route> 
        <Route path="/principalsnote" exact  component = {Principals_note}></Route> 
        <Route path="/purpose" exact  component = {Purpose}></Route> 
        <Route path="/Library" exact  component = {Library}></Route> 
      </Switch>
    </div>
  );
}

export default App;
