import axios from 'axios';
import Cookies from 'js-cookie';
import { loginStart, loginSuccess, loginFailed, registerStart, registerSuccess, registerFailed } from './authSlice';

// Thiết lập cơ bản cho axios
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // URL của API backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loginUser = async (dispatch, userCredentials, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('http://localhost:5000/v1/auth/login', userCredentials);
    dispatch(loginSuccess(res.data));
    Cookies.set('currentUser', JSON.stringify(res.data), { expires: 7 }); // Lưu vào cookies, expires: 7 ngày
    navigate('/');
  } catch (err) {
    dispatch(loginFailed(err.response.data.message || 'Login failed'));
  }
};

// Hàm xử lý đăng ký
export const registerUser = async (dispatch, user, navigate) => {
  dispatch(registerStart());
  try {
    const res = await axiosInstance.post('/v1/auth/register', user);
    dispatch(registerSuccess());
    navigate('/login'); // Điều hướng đến trang đăng nhập sau khi đăng ký thành công
    return true;
  } catch (err) {
    dispatch(registerFailed());
    console.error(err);
    return false;
  }
};

// Bạn có thể thêm nhiều hàm xử lý API khác tương tự như loginUser và registerUser
