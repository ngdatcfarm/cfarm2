import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';

function Header() {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const handleLogout = () => {
        dispatch(logout());
        document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    };

    return (
        <header>
            <div className="header-top">
                <div className="container">
                    <div className="header-top-left">
                        <ul className="header-top-list">
                            <li><a href=""><i className="fa-regular fa-phone"></i> 0123 456 789 (miễn phí)</a></li>
                            <li><a href=""><i className="fa-light fa-location-dot"></i> Xem vị trí cửa hàng</a></li>
                        </ul>
                    </div>
                    <div className="header-top-right">
                        <ul className="header-top-list">
                            <li><a href="">Giới thiệu</a></li>
                            <li><a href="">Cửa hàng</a></li>
                            <li><a href="">Chính sách</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-middle">
                <div className="container">
                    <div className="">
                        <Link to="/">
                            <Logo width={150} height={70}/> 
                        </Link>
                    </div>
                    <div className="header-middle-left"></div>
                    <div className="header-middle-center">
                        <form action="" className="form-search">
                            <span className="search-btn"><i className="fa-light fa-magnifying-glass"></i></span>
                            <input
                                type="text"
                                className="form-search-input"
                                placeholder="Tìm kiếm món ăn..."
                                onInput={() => {}}
                            />
                            <button className="filter-btn">
                                <i className="fa-light fa-filter-list"></i><span>Lọc</span>
                            </button>
                        </form>
                    </div>
                    <div className="header-middle-right">
                        <ul className="header-middle-right-list">
                            <li className="header-middle-right-item dnone open" onClick={() => {}}>
                                <div className="cart-icon-menu">
                                    <i className="fa-light fa-magnifying-glass"></i>
                                </div>
                            </li>
                            <li className="header-middle-right-item close" onClick={() => {}}>
                                <div className="cart-icon-menu">
                                    <i className="fa-light fa-circle-xmark"></i>
                                </div>
                            </li>
                            <li className="header-middle-right-item dropdown open">
                                <i className="fa-light fa-user"></i>
                                <div className="auth-container">
                                    {currentUser ? (
                                        <>
                                            <span className="text-tk">Xin chào, {currentUser.username} <i className="fa-sharp fa-solid fa-caret-down"></i></span>
                                            <ul className="header-middle-right-menu">
                                                <li><a href="javascript:void(0);" onClick={handleLogout}><i className="fa-light fa-right-from-bracket"></i> Đăng xuất</a></li>
                                            </ul>
                                        </>
                                    ) : (
                                        <>
                                            <span className="text-dndk">Đăng nhập / Đăng ký</span>
                                            <span className="text-tk">Tài khoản <i className="fa-sharp fa-solid fa-caret-down"></i></span>
                                            <ul className="header-middle-right-menu">
                                                <li><Link to="/login" id="login"><i className="fa-light fa-right-to-bracket"></i> Đăng nhập</Link></li>
                                                <li><Link to="/sign_up" id="signup"><i className="fa-light fa-user-plus"></i> Đăng ký</Link></li>
                                            </ul>
                                        </>
                                    )}
                                </div>
                            </li>
                            <li className="header-middle-right-item open" onClick={() => {}}>
                                <div className="cart-icon-menu">
                                    <i className="fa-light fa-basket-shopping"></i>
                                    <span className="count-product-cart">0</span>
                                </div>
                                <span>Giỏ hàng</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
