import './App.css';
import{BrowserRouter,Routes,Route} from'react-router-dom'
import Home from './page/Home';
import Navbar from './component/Navbar';
import Singalepage from './page/Singalepage'
function App() {
    return ( 
    <div className = "App" >
<BrowserRouter>
<Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/recipe' element={<Singalepage/>}/>
    </Routes>
    </BrowserRouter>
        </div>
    );
}

export default App;