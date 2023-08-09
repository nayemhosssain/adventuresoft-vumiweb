import './navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="navbar_left">
            <img src="http://www.la-dhaka.a2z-bd.com/school/img/school-logo.png" alt=""/>
            <div className="content">
                <h1 className='white'>ভূমি অধিগ্রহণ শাখা</h1>
                <p className='white'>জেলা প্রশাসকের কার্যালয়, ঢাকা</p>
            </div>
        </div>  

        <div className="navbar_right">
            <ul>
                <li className='white'>System Login</li>
                <li><Link  style={{color:"red"}} to="http://www.la-dhaka.a2z-bd.com/user-application/create" >ক্ষতিপূরণের আবেদন</Link></li>
            </ul>
        </div>
    </div>

    <div className="sub_nav">
        <ul>
            <li>হোম </li>
            <li>আমাদের সম্পর্কে</li>
            <li>অধিগ্রহণ আইন</li>
            <li>প্রকল্প</li>
            <li>নোটিশ</li>
            <li>অন্যান্য</li>
            <li>যোগাযোগ</li>
            <li>আবেদনের আপডেট জানুন</li>
        </ul>
    </div>
    </>
  )
}

export default Navbar
