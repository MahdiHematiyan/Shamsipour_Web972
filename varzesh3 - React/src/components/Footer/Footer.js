import React , { Component} from 'react';
import './Footer.css';
class Footer extends Component {

    render(){
        return(
            <section id="Footer">

                <footer class="page-footer clr">
                    <div class="top-area center-container clr">
                        <a href="#scroll-to-top" rel="nofollow" data-scroll-to="window-top" class="scroll-to-top"><img src="https://static.farakav.com/v3sl/v0.0.107-hippo/img/icon/arrow-up.png" width="39" height="39" alt="بازگشت به بالای صفحه"/></a>
                        <div class="row">
                            <div class="side left col-sm-4 text-left">
                                <div class="inner pull-left">
                                    <div class="top bordered-bottom"><img src="https://static.farakav.com/v3sl/v0.0.107-hippo/img/identity/varzesh3-grayscale.png" width="195" height="80" alt="لوگو مونوکروم ورزش سه"/></div>
                                    <div class="bottom socials">
                                        <a rel="me" class="item pull-left" title="Varzesh3 Facebook" href="https://facebook.com/varzesh3">
                                            <img width="37" height="37" alt="Facebook" src="https://static.farakav.com/v3sl/v0.0.107-hippo/img/icon/socials/facebook.png"/>
                                        </a>
                                        <a rel="me" class="item pull-left" title="Varzesh3 Instagram" href="https://instagram.com/Varzesh3ir">
                                            <img width="37" height="37" alt="Instagram" src="https://static.farakav.com/v3sl/v0.0.107-hippo/img/icon/socials/instagram.png"/>
                                        </a>
                                        <a rel="me" class="item pull-left" title="Varzesh3 Twitter" href="https://twitter.com/varzesh3">
                                            <img width="37" height="37" alt="Twitter" src="https://static.farakav.com/v3sl/v0.0.107-hippo/img/icon/socials/twitter.png"/>
                                        </a>
                                        <a class="item pull-left" title="RSS" href="/rss/index">
                                            <img width="37" height="37" alt="RSS" src="https://static.farakav.com/v3sl/v0.0.107-hippo/img/icon/socials/rss.png"/>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="side right col-sm-8">
                                <div class="row">
                                    <div class="list-container col-sm-4" data-nth="3">
                                        <ul>
                                        </ul>
                                    </div>
                                    <div class="list-container col-sm-4" data-nth="2">
                                        <ul>
                                                <li><a href="/dev" target="&quot;_blank&quot;" title="ابزار توسعه دهندگان">ابزار توسعه دهندگان</a></li>
                                                <li><a href="/careers" target="&quot;_blank&quot;" title="همکاری با ما">همکاری با ما</a></li>
                                                <li><a href="/about" target="&quot;_blank&quot;" title="درباره ما">درباره ما</a></li>
                                                <li><a href="http://charge.varzesh3.com/" target="&quot;_blank&quot;" title="کارت شارژ">کارت شارژ</a></li>
                                        </ul>
                                    </div>
                                    <div class="list-container col-sm-4" data-nth="1">
                                        <ul>
                                                <li><a href="/table" target="&quot;_blank&quot;" title="جداول لیگ ها ">جداول لیگ ها </a></li>
                                                <li><a href="/livescore" target="&quot;_blank&quot;" title="نتایج زنده ">نتایج زنده </a></li>
                                                <li><a href="/contact" target="&quot;_blank&quot;" title="ارتباط با ما">ارتباط با ما</a></li>
                                                <li><a href="/policy" target="&quot;_blank&quot;" title="قوانین و مقررات">قوانین و مقررات</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="color-bar">
                        <div class="color-bar--item red"></div>
                        <div class="color-bar--item gray"></div>
                        <div class="color-bar--item blue"></div>
                        <div class="color-bar--item green"></div>
                        <div class="color-bar--item yellow"></div>
                    </div>
                    <div class="center-container bottom-area">
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <span>تمام حقوق مادی و معنوی این سایت متعلق به <a href="/" title="ورزش سه">ورزش سه</a> می باشد.</span>
                                <span>شما می توانید از سایت ورزش سه در صورت پذیرش <a href="/policy">موافقت نامه کاربری</a> استفاده نمایید.</span>
                            </div>
                        </div>
                    </div>
                </footer>   
         </section>
            
            
        );
    }
}

export default Footer ;