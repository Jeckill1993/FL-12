import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import ContentApp from "./components/ContentApp/ContentApp";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Header />
            <ContentApp />
            <Footer />
        </BrowserRouter>
    </div>
  )
}

export default App;
