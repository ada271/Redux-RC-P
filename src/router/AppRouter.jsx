import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/Login";
import News from "../pages/News";
import PrivateRouter from "./PrivateRouter";
import Navbar from "../components/Navbar";
;
const AppRouter = () => {
    
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<PrivateRouter />}>
                    <Route path="" element={<News/>} />
                </Route>
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
