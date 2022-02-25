import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Category from './Pages/Category';
import Product from './Components/Product/Product';
import ScrollToTop from './Helpers/Hooks/ScrollToTop';




const App = () => {
    return (
        <Router>
            <ScrollToTop />
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
