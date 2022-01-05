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
import Cart from "./Components/Cart/Cart";
import ContactForm from "./Components/ContactForm/ContactForm";

//Views
import Home from './Views/Home/Home'
import Categories from './Views/Categories/Categories'
import Generos from './Views/Generos/Generos'

//Context
import { CartProvider } from './Context/cartContext/useContext';

function App ()  {
    return (
      <>
      <CartProvider>
      <div className='App'>
      <Router>
      <Header/>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/category/:categoryId' element={<Categories/>}></Route>
            <Route path='/genre/:genre' element={<Generos/>}></Route>
            <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
            <Route path='/Cart' element={<Cart/>}></Route>
            <Route path='/form' element={<ContactForm/>}></Route>
            <Route path='*' element={<ErrorPage/>}></Route>
          </Routes>
        </Router>
      </div>
      <div className='container'>
      <List bulleted horizontal>
      <List.Item href='/*' as='a'>Nosotros</List.Item>
      <List.Item href='/*' as='a'>Preguntas frecuentes</List.Item>
      <List.Item href='/*' as='a'>Contacto</List.Item>
      </List>
    </div>
      <div className ='greet'> 
      <Button href='/*' circular color='facebook' icon='facebook' />
      <Button href='/*' circular color='twitter' icon='twitter' />
      <Button href='/*' circular color='linkedin' icon='linkedin' />
      <Button href='/*' circular color='google plus' icon='google plus' />
    </div>
    </CartProvider>
      </>
    );
}

export default App;