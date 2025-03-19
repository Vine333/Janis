import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../pages/main/HomePage.jsx";




const AppRoutes = () => {

    return (
        <BrowserRouter basename={'/'}>
            <Routes>
                <Route path="/" element={<HomePage/>}/>



            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;

