import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import Container from '@mui/material/Container';
import {render} from "react-dom";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Category from './Pages/Category';
import Product from './Components/Product/Product';




const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/category/:section' element={<Category/>}/>
            <Route path='/category/:section/products/:id' element={<Product/>}/>

            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;
