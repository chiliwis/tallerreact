import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from '../Components/Navbar';
import HomePage from '../pages/HomePage';
import CrudPage from '../pages/CrudPage';

const AppRouter = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/crud" element={<CrudPage/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default AppRouter