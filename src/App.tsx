import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import LogOut from './components/auth/LogOut';
import PrivateRoute from './components/auth/PrivateRoute';
import Customers from './components/Customers/Customers';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
    return (
        <>
            <div className='d-flex'>
                <Link to="/" className='btn btn-info m-2'>Customers</Link>
                <Link to="/login" className='btn btn-info m-2'>Login</Link>
                <Link to="/signup" className='btn btn-info m-2'>Sign Up</Link>
                <LogOut />
            </div>


            <Routes>
                <Route
                    path='/'
                    element={
                        <PrivateRoute>
                            <Customers />
                        </PrivateRoute>
                    } />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
            </Routes>
        </>
    );
}

export default App;
