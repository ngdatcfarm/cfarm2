import React from 'react';
import Logo from './Logo';

function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-top">
                <div className="footer-top-content">
                    <div className="footer-top-img">
                    
                        <Logo width={150} height={100}/> 
                   
                    </div>
                    <div className="footer-top-subbox">
                        <div className="footer-top-subs">
                            <h2 className="footer-top-subs-title">Đăng ký nhận tin</h2>
                            <p className="footer-top-subs-text">Nhận thông tin mới nhất từ chúng tôi</p>
                        </div>
                        <form className="form-ground">
                            <input type="email" className="form-ground-input" placeholder="Nhập email của bạn" />
                            <button className="form-ground-btn">
                                <span>ĐĂNG KÝ</span>
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="widget-area">
            <div className="container">
                <div className="widget-row">
                    <div className="widget-row-col-1">
                        <h3 className="widget-title">Về chúng tôi</h3>
                        <div className="widget-row-col-content">
                            <p>Chính thức đi vào sản xuất từ những năm 2008, trang trại CFarm với sứ mệnh mang đến cho người tiêu dùng Việt một nguồn gà ta chất lượng, đảm bảo an toàn, giá cả phải chăng. Chúng tôi mong muốn trở thành một đơn vị đáng tin cậy, cung cấp gà ta tươi ngon, dinh dưỡng cho mọi gia đình.</p>
                        </div>
                        <div className="widget-social">
                            <div className="widget-social-item">
                                <a href="">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </div>
                            <div className="widget-social-item">
                                <a href="">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </div>
                            <div className="widget-social-item">
                                <a href="">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                            <div className="widget-social-item">
                                <a href="">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="widget-row-col">
                        <h3 className="widget-title">Liên kết</h3>
                        <ul className="widget-contact">
                            <li className="widget-contact-item">
                                <a href="">
                                    <i className="fa-regular fa-arrow-right"></i>
                                    <span>Về chúng tôi</span>
                                </a>
                            </li>
                            <li className="widget-contact-item">
                                <a href="">
                                    <i className="fa-regular fa-arrow-right"></i>
                                    <span>Thực đơn</span>
                                </a>
                            </li>
                            <li className="widget-contact-item">
                                <a href="">
                                    <i className="fa-regular fa-arrow-right"></i>
                                    <span>Điều khoản</span>
                                </a>
                            </li>
                            <li className="widget-contact-item">
                                <a href="">
                                    <i className="fa-regular fa-arrow-right"></i>
                                    <span>Liên hệ</span>
                                </a>
                            </li>
                            <li className="widget-contact-item">
                                <a href="">
                                    <i className="fa-regular fa-arrow-right"></i>
                                    <span>Tin tức</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="widget-row-col">
                        <h3 className="widget-title">Thực đơn</h3>
                        <ul className="widget-contact">
                            <li className="widget-contact-item">
                                <a href="">
                                    <i className="fa-regular fa-arrow-right"></i>
                                    <span>Gà Lai Chọi</span>
                                </a>
                            </li>
                            <li className="widget-contact-item">
                                <a href="">
                                    <i className="fa-regular fa-arrow-right"></i>
                                    <span>Gà Lai Hồ</span>
                                </a>
                            </li>
                            <li className="widget-contact-item">
                                <a href="">
                                    <i className="fa-regular fa-arrow-right"></i>
                                    <span>Đồ Ăn Vặt</span>
                                </a>
                            </li>
                            <li className="widget-contact-item">
                                <a href="">
                                    <i className="fa-regular fa-arrow-right"></i>
                                    <span>Gia Vị</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="widget-row-col-1">
                        <h3 className="widget-title">Liên hệ</h3>
                        <div className="contact">
                            <div className="contact-item">
                                <div className="contact-item-icon">
                                    <i className="fa-regular fa-location-dot"></i>
                                </div>
                                <div className="contact-content">
                                    <span>Hoàng Hoa Thám , Thành Phố Chí Linh , Tỉnh Hải Dương</span>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-item-icon">
                                    <i className="fa-regular fa-phone"></i>
                                </div>
                                <div className="contact-content contact-item-phone">
                                    <span>+84 971 241 522</span>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-item-icon">
                                    <i className="fa-regular fa-envelope"></i>
                                </div>
                                <div className="contact-content contact-item-email">
                                    <span>Cfarmvietnam@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
