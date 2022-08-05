import React from 'react';

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer} from "react-toastify";
import HomePage from './pages/HomePage'
import PropertiesPage from './pages/PropertiesPage'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ActivatePage from "./pages/ActivatePage";
import "react-toastify/dist/ReactToastify.css";



const App = () => {
    return (
        <>
            <Router>
                <Header/>
                <main className="py-3">
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>

                        <Route
                            path="/properties"
                            element={<PropertiesPage/>}
                        />
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/register" element={<RegisterPage/>}/>
                        <Route path="/activate/:uid/:token" element={<ActivatePage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                    <ToastContainer theme="dark"/>
                </main>
                <Footer/>
            </Router>
            <ToastContainer/>
        </>
    );
}

export default App;
