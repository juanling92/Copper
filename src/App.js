//import './App.css';
//
//function App() {
//  return (
//    <div className="App">
//    <h1>Tienda Copper</h1>
//    </div>
//  );
//}
//
//export default App;

import React, {Component} from "react";
import './App.css'

//Components
import Header from './Components/Header/Header';
import Navbar from './Components/NavBar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
class App extends Component {
  render () {
    return (
      <div className='App'>
      <Header 
      img='./Components/Header/logo.png'/>
      <Navbar/>
      <ItemListContainer greeting='Bienvenidos a Cooper'/>
      </div>
    );
  }
}

export default App;