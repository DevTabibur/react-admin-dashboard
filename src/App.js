import { Route, Router, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import New from './pages/New/New';
import Single from './pages/Single/Single';
import List from './pages/List/List';


function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        {/* for user */}
        <Route path='/users' element={<List/>}></Route>
        <Route path='/users/:userId' element={<Single/>}></Route>
        <Route path='/users/new' element={<New/>}></Route>
        {/* for products */}
        <Route path='/products' element={<List/>}></Route>
        <Route path='/products/:productId' element={<Single/>}></Route>
        <Route path='/products/new' element={<New/>}></Route>

      </Routes>
    </>
  );
}

export default App;
