import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Shop from "./components/Shop";
import "./style.css";

function App() {
    return (
        <section className="content">
            <nav>
                <h1>Store</h1>
                <ul>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/shop">Shop</Link> </li>
                    <li> <Link to="/contact">Contact</Link> </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/shop" element={<Shop/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </section>
    );
}

export default App;
