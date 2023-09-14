
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Newscom from './components/Newscom';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';


export default class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  apikey= "1dc44460d52a4de6a715f165883cc976";

  render() {
   
    return (
      <Router>
        <div>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
       <Navbar/>
       <Routes>
       <Route  exact path="/" element={ <Newscom  apikey={this.apikey} setProgress={this.setProgress} key="general" category={"general"}/>}></Route>
        <Route exact path="/business"  element={ <Newscom   apikey={this.apikey} setProgress={this.setProgress}   key="business" category={"business"}/>}></Route>
        <Route exact path="/entertainment"  element={ <Newscom   apikey={this.apikey}  setProgress={this.setProgress}  key="entertainment" category={"entertainment"}/>}></Route>
        <Route exact path="/health"  element={ <Newscom  apikey={this.apikey}   setProgress={this.setProgress}  key="health" category={"health"}/>}></Route>
        <Route exact path="/sports"  element={ <Newscom   apikey={this.apikey} setProgress={this.setProgress}   key="sports" category={"sports"}/>}></Route>
        <Route exact path="/science"  element={ <Newscom  apikey={this.apikey} setProgress={this.setProgress}   key="science" category={"science"}/>}></Route>
        <Route exact path="/technology"  element={ <Newscom  apikey={this.apikey} setProgress={this.setProgress}   key="technology" category={"technology"}/>}></Route>
       </Routes>
       
      </div>
      </Router>
    )
  }
}
