import {Route, Routes } from 'react-router-dom';
import Login from "../pages/Login";
import { ToastContainer } from 'react-toastify';
import Places from '../pages/Places/Places';
import { AuthProvider } from '../context/AuthContext';
import PrivateRoute, { NonPrivateRoute } from './PrivateRoute';
import Register from '../pages/Register';
import IndexPage from '../pages/IndexPage';
import Place from '../pages/Editor/Place';
import MenuSettings from '../pages/MenuSettings';
import Menu from '../pages/Menu';
import Orders from '../pages/Orders';
import { Terms } from '../pages/Terms/Terms';
import { ResetPassword } from '../pages/ResetPassword/ResetPassword';
import { ForgotPassword } from '../pages/ForgotPassword/ForgotPassword';

function App(){ 
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/login" element={<NonPrivateRoute Component={Login} />} />
                <Route path="/register" element={<NonPrivateRoute Component={Register} />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/places" element={<PrivateRoute Component={Places}/>} />
                <Route path="/places/:id" element={<PrivateRoute Component={Place}/>} />
                <Route path="/places/:id/settings" element={<PrivateRoute Component={MenuSettings}/>} />
                <Route path="/places/:id/orders/" element={<PrivateRoute Component={Orders} />} />
                <Route path="/menu/:id/:tableNumber" element={<Menu />} />
                <Route path="/password/forgot" element={<ForgotPassword />} />
                <Route path="/password/reset/:token" element={<ResetPassword />} />
                <Route path="*" element={<IndexPage />} />
            </Routes>
            <ToastContainer />
        </AuthProvider>
    )
}
export default App
