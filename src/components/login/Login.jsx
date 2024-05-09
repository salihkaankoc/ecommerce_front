import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import "./Login.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { handleLogin } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState();
    const [type, setType] = useState('')
   
    const handleSubmit = async () => {
        if (!username || !password) {
            toast.error('Kullanıcı adı veya şifre boş olamaz.', {
                autoClose: 2000
            });
        } else {
            try {
                const response = await handleLogin(username, password);
               
                if (response.token) {
                    console.log(response.data.token)
                    toast.success('Giriş başarılı! Yönlendiriliyor..', {
                        autoClose: 2000
                    });
                } else {
                    toast.error('Kullanıcı adı veya şifre hatalı. Tekrar deneyin.', {
                        autoClose: 2000
                    });
                }
            } catch (error) {
                toast.error('Bir hata oluştu. Lütfen tekrar deneyin.', {
                    autoClose: 2000
                });
            }
        }
    };
    

    return (
        <div className='login-div'>
            {message != "" && <ToastContainer className="toast" />}
            <div className='login-container'>
                <img alt='login' src='https://cdni.iconscout.com/illustration/premium/thumb/app-login-5948720-4922487.png' className='login-image' />
                <h3 className='login-title'>Login</h3>
                <input className='input' onChange={(e) => setUsername(e.target.value)} type='text' placeholder='Username' required />
                <input className='input' onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' required />
                <button onClick={handleSubmit} className='login-button' type='button'>Login</button>
            </div>
        </div>
    );
};

export default Login;
