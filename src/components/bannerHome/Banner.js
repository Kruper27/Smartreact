import React, { Component} from 'react'
import {Link} from "react-router-dom";
import BannerStyle from "./stylesForBanner/BannerStyle";
import BannerH2 from "./stylesForBanner/BannerH2";
import BannerH3 from "./stylesForBanner/BannerH3";
import BannerLink from "./stylesForBanner/BannerLink";

export default class Leading extends Component {
    render() {
        return(
            <BannerStyle>
                <BannerH2>Our mission is simple :</BannerH2>

                <BannerH3>to execute your ideas, smartly</BannerH3>

                <BannerLink to="/"> Check Services </BannerLink>
                <div className="circles">
                    {/*<div id="circle1"></div>*/}
                    {/*<div id="circle2"></div>*/}
                    {/*<div id="circle3"></div>*/}
                </div>

                <div className="cookies">
                    {/*<img src="asserts/images/Shape_664.png" alt="">*/}
                        <div className="cookies_info">
                            <p>
                                We use cookie file to improve your experience with the website. By continuing to use the
                                site you agree
                                to accept cookies. We respect your right to privacy, check our <Link to="/" >privacy
                                policy.</Link>
                            </p>
                        </div>
                        {/*<div className="Accept_but">*/}
                        {/*    <a href="#"> Accept</a>*/}
                        {/*</div>*/}
                </div>
            </BannerStyle>
        )
    }


}