import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import { Switch , Route  } from 'react-router';
import Profile from './Components/Profile/Profile';
import Form from './Components/form/form';
import Contact from './Components/contact/contact';
import History from './Components/LinksPage/history';
import Principals_note from './Components/LinksPage/directorsNote';
import Admission_Contact from './Components/Contacted_soon/admission_contact';
import Syllabus from './Components/syllabus/syllabus';
import LibInst from './Components/LinksPage/libInst';
import Guidelines from './Components/LinksPage/guidelines';
import Rules from './Components/LinksPage/rules';
import AdmNorms from './Components/LinksPage/admNorms';
import Facility from './Components/LinksPage/facilities';

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
        <Route path="/libraryinstructions" exact  component = {LibInst}></Route> 
        <Route path="/disciplinaryrules" exact  component = {Rules}></Route> 
        <Route path="/admissionnorms" exact  component = {AdmNorms}></Route> 
        <Route path="/guidelines" exact  component = {Guidelines}></Route> 
        <Route path="/syllabus" exact  component = {Syllabus}></Route> 
        <Route path="/facilities" exact  component = {Facility}></Route> 
        <Route path="/admissioncontact" exact  component = {Admission_Contact}></Route> 
      </Switch>
    </div>
  );
}

export default App;
