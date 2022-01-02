import Home from './components/home/Home'
import Create from './components/create/Create'
import Explore from './components/explore/Explore'
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path='/' element={< Home />}></Route>
            <Route path='/create' element={< Create />}></Route>
            <Route path='/explore' element={< Explore />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
