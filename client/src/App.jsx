import React from 'react';

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import HomePage from './pages/HomePage'
import PropertiesPage from './pages/PropertiesPage'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFoudPage from "./pages/NotFoudPage";

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
                        <Route path="*" element={<NotFoudPage/>}/>
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
