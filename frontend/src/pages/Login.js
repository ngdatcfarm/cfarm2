import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';  // Đảm bảo đường dẫn đúng
import { loginUser } from '../redux/apiRequest';  // Sử dụng hàm từ apiRequest.js

const Login = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isFetching, error } = useSelector((state) => state.auth.login);

    const handleLogin = async (e) => {
        e.preventDefault();
        await loginUser(dispatch, { phone, password }, navigate);
    };

    return (
        <section id='login' className='bg-gray-100 py-6'>
            <div className="container mx-auto px-5">
                <div className="form-content login bg-white shadow-lg rounded-lg p-6 w-full max-w-md mx-auto">
                    <div className='flex justify-center mb-4'>
                        <Logo width={150} height={70} />
                    </div>
                    <h3 className="form-title text-2xl font-semibold mb-4 text-center">Đăng nhập tài khoản</h3>
                    <p className="form-description text-center mb-6">Đăng nhập thành viên để mua hàng và nhận những ưu đãi đặc biệt từ chúng tôi</p>
                    <form className='w-full' onSubmit={handleLogin}>
                        <div className="form-group mb-4">
                            <label htmlFor="phone" className="form-label block text-gray-700">Số điện thoại</label>
                            <input 
                                id="phone" 
                                name='phone' 
                                type="text" 
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required 
                                placeholder="Nhập số điện thoại" 
                                className="form-control w-full px-3 py-2 border rounded-lg" />
                            <span className="form-message phonelog text-red-500 text-sm"></span>
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="password" className="form-label block text-gray-700">Mật khẩu</label>
                            <input 
                                id="password" 
                                name='password' 
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Nhập mật khẩu" 
                                className="form-control w-full px-3 py-2 border rounded-lg" />
                            <Link to="/forgotpass" className="form-label block text-green-800 hover:underline">
                                Quên mật khẩu?
                            </Link>
                        </div>
                        {error && <p className="text-red-500 text-center mb-4">Sai số điện thoại hoặc mật khẩu</p>}
                        <button className="form-submit w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700" id="login_button" disabled={isFetching}>
                            {isFetching ? 'Đang đăng nhập...' : 'Đăng nhập'}
                        </button>
                    </form>
                    <div className="form-submit mt-3 text-center">
                        <Link to="/sign_up" className="bg-center text-center block py-2 text-blue-500 hover:underline" id="login-button">
                            Không có tài khoản? Đăng ký ngay!
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
