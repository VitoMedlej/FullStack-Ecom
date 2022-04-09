import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Category from './Pages/Category';
import Product from './Components/ProductPage/ProductPage';
import ScrollToTop from './Helpers/Hooks/ScrollToTop';
import Backdrop from '@mui/material/Backdrop';
import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {toggleCartState} from './Redux/Slices/CartSlice'
import {RootState} from './Redux/Store';
import {toggleSideBarState} from './Redux/Slices/SideBarSlice'
import {toggleBackDropState} from './Redux/Slices/BackDropSlice'
import CartPage from './Pages/CartPage';
import AccountPage from './Pages/Account/AccountPage';
import Dashboard from './Pages/Dashboard/Dashboard';
import { saveUser } from './Redux/Slices/UserSlice';
const App = () => {
    const [open,
        setOpen] = useState(true);

    const isBackDrop = useSelector((state : RootState) => state.isBackDrop.isBackDrop)
    const dispatch = useDispatch()
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);

            dispatch(saveUser(foundUser));

        }
    }, []);
    return (
        <Router>
            <Backdrop
                open={isBackDrop}
                onClick={() => {
                dispatch(toggleCartState(false));
                dispatch(toggleSideBarState(false));
                dispatch(toggleBackDropState(false))
            }}
                sx={{
                color: '#fff',
                zIndex: '558'
            }}/>
            <ScrollToTop/>
            <Navbar setBackDrop={setOpen} backdrop={open}/>
            <Routes>
                <Route path='/' element={< Home />}/>
                <Route path='/category/:section' element={< Category />}/>
                <Route path='/category/:section/products/:id' element={< Product />}/>
                <Route path='/cart' element={< CartPage />}/>
                <Route path='/account/:handler' element={< AccountPage />}/>
                <Route path='/dashboard/:route' element={< Dashboard />}/>
         

            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;
