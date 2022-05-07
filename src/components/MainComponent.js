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
import Inventory from './pages/Inventory/Inventory';
import RequireAuth from './Auth/RequireAuth/RequireAuth';

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
                <Route path='/manage-inventories' element={
                    <RequireAuth>
                        <ManageInventories></ManageInventories>
                    </RequireAuth>
                }></Route>
                <Route path='/add-items' element={
                    <RequireAuth>
                        <AddItems></AddItems>
                    </RequireAuth>
                }></Route>
                <Route path='/my-items' element={
                    <RequireAuth>
                        <MyItems></MyItems>
                    </RequireAuth>
                }></Route>
                <Route path='/inventory/:id' element={
                    <RequireAuth>
                        <Inventory></Inventory>
                    </RequireAuth>
                }></Route>

                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
};

export default MainComponent;