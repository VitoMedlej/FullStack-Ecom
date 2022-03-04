import ReactDOM from 'react-dom';
import App from './App';
import './Styles/Styles.css'
import {store} from './Redux/Store'
import {Provider} from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'))