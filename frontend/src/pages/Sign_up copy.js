import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logo from '../components/Logo';

const Sign_up = () => {
  const [data, setData] = useState({
    name: '',
    phone: '',
    address1: '',
    address2: '',
    address3: '',
    address4: '',
    pass: '',
    repass: '',
  });

  const handleOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.pass !== data.repass) {
      alert('Passwords do not match');
      return;
    }
  
    console.log('Data to be sent:', data);  // Log data to be sent
  
    try {
      const response = await axios.post('http://localhost:3000/api/users/register', {
        name: data.name,
        phone: data.phone,
        address1: data.address1,
        address2: data.address2,
        address3: data.address3,
        address4: data.address4,
        pass: data.pass,
      });
      if (response.status === 201) {
        alert('User registered successfully');
      }
    } catch (error) {
      console.error('Registration error:', error);  // Log detailed error
      alert('Registration failed. Please try again.');
    }
  };
  
  
  return (
    <section id='signup' className='bg-gray-100 py-6'>
      <div className="container mx-auto px-5">
        <div className="form-content login bg-white shadow-lg rounded-lg p-6 w-full max-w-md mx-auto">
          <div className='flex justify-center mb-4'>
            <Logo width={150} height={70} />
          </div>
          <h3 className="form-title text-2xl font-semibold mb-4 text-center">Đăng ký tài khoản</h3>
          <p className="form-description text-center mb-6">Đăng nhập thành viên để mua hàng và nhận những ưu đãi đặc biệt từ chúng tôi</p>
          <form className='w-full' onSubmit={handleSubmit}>
            <div className="form-group mb-4">
              <label htmlFor="name" className="form-label block text-gray-700">Họ và tên</label>
              <input id="name" name='name' type="text" onChange={handleOnChange} required value={data.name} placeholder="Nhập tên đầy đủ của bạn" className="form-control w-full px-3 py-2 border rounded-lg" />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="phone" className="form-label block text-gray-700">Số điện thoại</label>
              <input id="phone" name='phone' type="text" onChange={handleOnChange} required value={data.phone} placeholder="Nhập số điện thoại" className="form-control w-full px-3 py-2 border rounded-lg" />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="address1" className="form-label block text-gray-700">Địa chỉ chi tiết</label>
              <input id="address1" name='address1' type="text" onChange={handleOnChange} required value={data.address1} placeholder="Tỉnh/ Thành Phố" className="form-control w-full px-3 py-2 border rounded-lg" />
              <input id="address2" name='address2' type="text" onChange={handleOnChange} required value={data.address2} placeholder="Huyện/ Thị Xã/ Thành Phố" className="form-control w-full px-3 py-2 border rounded-lg mt-2" />
              <input id="address3" name='address3' type="text" onChange={handleOnChange} required value={data.address3} placeholder="Xã/ Phường/ Thị trấn" className="form-control w-full px-3 py-2 border rounded-lg mt-2" />
              <input id="address4" name='address4' type="text" onChange={handleOnChange} required value={data.address4} placeholder="Số nhà/ Tên đường/ Thôn/ Xóm" className="form-control w-full px-3 py-2 border rounded-lg mt-2" />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="pass" className="form-label block text-gray-700">Mật khẩu</label>
              <input id="pass" name='pass' value={data.pass} onChange={handleOnChange} required type="password" placeholder="Nhập mật khẩu" className="form-control w-full px-3 py-2 border rounded-lg" />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="repass" className="form-label block text-gray-700">Nhập lại mật khẩu</label>
              <input id="repass" name='repass' value={data.repass} onChange={handleOnChange} required type="password" placeholder="Nhập lại mật khẩu" className="form-control w-full px-3 py-2 border rounded-lg" />
            </div>
            <button className="form-submit w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700" id="login_button">Đăng ký</button>
            <div className="form-submit mt-3 text-center">
              <Link to="/Login" className="bg-center text-center block py-2 text-white-500 hover:bg-blue-700" id="login-button">Bạn đã có tài khoản? Đăng nhập ngay!</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Sign_up;
