import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import SignUp from './Auth/SignUp/SignUp';
import Login from './Auth/Login/Login';
import ManageInventories from './pages/ManageInventories/ManageInventories';
import AddItems from './pages/AddItems/AddItems';
import MyItems from './pages/MyItems/MyItems';
import NotFound from './pages/NotFound/NotFound';

import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';

const MainComponent = () => {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/blogs' element={<Blogs></Blogs>}></Route>
                <Route path='/signup' element={<SignUp></SignUp>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/manage-inventories' element={<ManageInventories></ManageInventories>}></Route>
                <Route path='/add-items' element={<AddItems></AddItems>}></Route>
                <Route path='/my-items' element={<MyItems></MyItems>}></Route>

                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
};

export default MainComponent;