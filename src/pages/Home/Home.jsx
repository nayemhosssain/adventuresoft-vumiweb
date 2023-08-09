import { Fragment } from 'react';
import person from '../../assets/images/person.png';
import "./home.css"
import Navbar from "../../components/Navber/Navbar.jsx";
import Footer from '../../components/Footer/Footer';
import Marquee from "react-fast-marquee";


function HomePage() {
    return (
        <Fragment>
            <div className='home'>
                <Navbar/>

                {/* content */}
                <div className="container">
                    <div className="poster">
                        <img src="http://www.la-dhaka.a2z-bd.com/school/img/slider3.jpg" alt="" />
                    </div>
                    <div className='people-container'>
                        <div className="people">
                            <h3>জেলা প্রশাসকের বাণী</h3>
                            <div className="image">
                                <div className="person">
                                    <img src={person} alt="" />
                                </div>
                                <p className="desc">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia perferendis voluptate facilis a, aliquid ipsa ratione, qui magnam 
                                </p>
                            </div>
                        </div><br />

                        <div className="people">
                            <h3>জেলা প্রশাসকের বাণী</h3>
                            <div className="image">
                                <div className="person">
                                    <img src={person} alt="" />
                                </div>
                                <p className="desc">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia perferendis voluptate facilis a, aliquid ipsa ratione, qui magnam 
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='container container-box'>
                    {/* left start  */}
                    <div className='left-start'>
                        <div className='last-update'>
                            <div className='news'>সর্বশেষ আপডেট</div>
                            <div className='newsline'><Marquee>সর্বশেষ আপডেট সর্বশেষ আপডেট সর্বশেষ আপডেট সর্বশেষ আপডেট</Marquee></div>
                        </div>
                        <div className=''>
                            <div className='newsbox'>
                                <div className='boxshape' >প্রেক্ষাপট</div>
                                <div className='boxshape' >উদ্দেশ্য</div>
                            </div>
                        </div>
                        <div className='container newsContainer'>
                            <div className='newsbox1'>
                                <div className='boxshape1' >সর্বশেষ আপডেট সর্বশেষ আপডেট সর্বশেষ আপডেট সর্বশেষ আপডেটসর্বশেষ আপডেট সর্বশেষ আপডেট </div>
                                <div className='boxshape1' >সর্বশেষ আপডেট সর্বশেষ আপডেট সর্বশেষ আপডেট সর্বশেষ আপডেটসর্বশেষ আপডেট সর্বশেষ আপডেট </div>
                            </div>
                        </div>
                    </div>
                    {/* left end  */}

                    {/* right start  */}
                    <div className="people-id">
                        <h3>ভুমি অধিগ্রহন কর্মকর্তা</h3>
                        <div className='person-box'>
                            <div className="image-id">
                                <div className="person">
                                    <img src={person} alt="" />
                                    <h4>joss</h4>
                                </div>
                                <div className="person">
                                    <img src={person} alt="" />
                                    <h4>joss</h4>
                                </div>

                            </div>
                            <div className="image-id">
                                <div className="person">
                                    <img src={person} alt="" />
                                    <h4>joss</h4>
                                </div>
                                <div className="person">
                                    <img src={person} alt="" />
                                    <h4>joss</h4>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* right end   */}
                </div>

                <Footer/>

            </div>


        </Fragment>
    )
}

export default HomePage


