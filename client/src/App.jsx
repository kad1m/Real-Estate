import React from 'react';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {ToastContainer} from "react-toastify";
import HomePage from './pages/HomePage'
import PropertiesPage from './pages/PropertiesPage'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ActivatePage from "./pages/ActivatePage";
import "react-toastify/dist/ReactToastify.css";
import ProfilePage from "./pages/ProfilePage";
import PrivateRouters from "./utils/PrivateRouters"
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ConfirmResetPassword from "./pages/ConfirmResetPassword";


const App = () => {
    return (
        <>
            <Router>
                <Header/>
                <main className="py-3">
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>

                        <Route path="/properties" element={<PropertiesPage/>}/>

                        <Route path="/register" element={<RegisterPage/>}/>
                        <Route path="/activate/:uid/:token" element={<ActivatePage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/reset_password" element={<ResetPasswordPage/>}/>
                        <Route path="/password/reset/confirm/:uid/:token" element={<ConfirmResetPassword/>}/>
                        <Route element={<PrivateRouters/>}>
                            <Route path="/profile/me" element={<ProfilePage/>}/>
                        </Route>

                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                    <ToastContainer theme="dark"/>
                </main>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
