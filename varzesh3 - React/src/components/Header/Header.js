import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div id="header">
            <div id="topheader">
                <div id="center-topheader">


                    <ul>
                        <li>    <a href="#">تیم فانتزی</a>  </li>
                        <li>    <a href="#">ویدئو</a>   </li>
                        <li>    <a href="#">اخبار زنده</a>  </li>
                        <li>    <a href="#">ارتباط با ما</a>    </li>
                        <li>    <a href="#">کارت شارژ</a>   </li>
                        <li>    <a href="#">تبلیغات</a> </li>
                    </ul>


                    <div id="file">

                        <a >
                            <span>ورود</span>
                            <img src="img/login.png"/>
                        </a>
                    </div>

                    <div id="time">

                        <a>
                            22:00
                            <img src="img/clock.png"/>
                        </a>
                    </div>

                    <div id="date">

                        <a>
                            <span>دوشنبه 20 خرداد</span>
                            <img src="img/login.png"/>
                        </a>
                    </div>
                </div>
            </div>




            <div id="mid-head">
                <div id="center-mid-head">
                    <div id="main-logo">

                        <a href="#">    <img src="img/logo.png" alt="لوگو" border="0" width="141" height="66"/>  </a>

                    </div>
                    <div id="header-add-border">
                        <div id="header-add" style="clear: both;">

                            <a href="#" target="_blank">    <img src="img/head-add.gif" width="468" height="60"/>    </a>

                        </div>
                    </div>
                </div>
            </div>

            
    


            <div id="main-menu">
                <div id="center-main-menu">
                    <nav>

                        <ul>
                            <li>    <a href="#">صفحه اصلی</a>   </li>
                            <li>    <a href="#">جداول لیگ‌ها </a>   </li>
                            <li>    <a href="#">روزنامه</a>   </li>
                            <li>    <a href="#">ویدئو </a>   </li>
                            <li>    <a href="#">جام حذفی</a>   </li>
                            <li>    <a href="#">تصاویر بازیکنان </a>   </li>
                            <li>    <a href="#">پخش زنده</a>   </li>
                            <li>    <a href="#">نتایج زنده </a>   </li>
                        </ul>

                    </nav>
                </div>


                <div id="search">
                    <input placeholder="جستجوی اخبار، تیم ها، بازیکنان و ویدیوهای ورزشی..." id="searchKey"
                        name="searchKey" type="text"/>
                    <button></button>
                    <div class="search-result"></div>
                </div>
            </div>







        </div>
      </header>
    );
  }
}

export default Header;
