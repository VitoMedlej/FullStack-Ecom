import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import Container from '@mui/material/Container';
import {render} from "react-dom";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from './Components/Footer/Footer';




const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
            <Route path='/' element={<Home/>}/>

            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;
