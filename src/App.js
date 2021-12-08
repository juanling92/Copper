import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { List, Button } from 'semantic-ui-react'

//CSS 
import './App.css'
import './Components/ItemListContainer/ItemListContainer.css'

//Components
import Header from './Components/Header/Header';
import Navbar from './Components/NavBar/Navbar';
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ErrorPage from "./Components/Error/ErrorPage";

//Views
import Home from './Views/Home/Home'
import Categories from './Views/Categories/Categories'
import Descuentos from './Views/Descuentos/Descuentos'

//Context
import { CartItemsProvider } from './Context/cartContext/cartContext';


function App ()  {
    return (
      <>
      <CartItemsProvider>
      <div className='App'>
      <Header img='./Components/Header/logo.png'/>
        <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/category/:categoryId' element={<Categories/>}></Route>
            <Route path='/category/descuentos' element={<Descuentos/>}></Route>
            <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
            <Route path='*' element={<ErrorPage/>}></Route>
          </Routes>
        </Router>
      </div>
      <div className='container'>
      <List bulleted horizontal>
      <List.Item as='a'>Nosotros</List.Item>
      <List.Item as='a'>Preguntas frecuentes</List.Item>
      <List.Item as='a'>Contacto</List.Item>
      </List>
    </div>
      <div className ='greet'> 
      <Button circular color='facebook' icon='facebook' />
      <Button circular color='twitter' icon='twitter' />
      <Button circular color='linkedin' icon='linkedin' />
      <Button circular color='google plus' icon='google plus' />
    </div>
    </CartItemsProvider>
      </>
    );
}

export default App;