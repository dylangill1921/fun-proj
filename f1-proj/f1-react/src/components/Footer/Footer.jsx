import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <h3>Social Media</h3>
            <ul className="wrapper">
                <li className="icon twitter">
                <a href="https://twitter.com/F1?ref_src=twsrc%5Egoogle|twcamp%5Eserp|twgr%5Eauthor" target="_blank" rel="noopener noreferrer">
                    <span className="tooltip">TWITTER</span>
                    <i className="fab fa-twitter"></i>
                </a>
                </li>
                <li className="icon instagram">
                <a href="https://www.instagram.com/f1/" target="_blank" rel="noopener noreferrer">
                    <span className="tooltip">INSTAGRAM</span>
                    <i className="fab fa-instagram"></i>
                </a>
                </li>
                <li className="icon youtube">
                <a href="https://www.youtube.com/@Formula1" target="_blank" rel="noopener noreferrer">
                    <span className="tooltip">YOUTUBE</span>
                    <i className="fab fa-youtube"></i>
                </a>
                </li>
                <li className="icon tiktok">
                <a href="https://www.tiktok.com/@f1?lang=en" target="_blank" rel="noopener noreferrer">
                    <span className="tooltip">TIKTOK</span>
                    <i className="fab fa-tiktok"></i>
                </a>
                </li>
            </ul>
            <hr id="bottom" />
            <h3>Our Partners</h3>
            <div className="main-sponsors">
                <a href="https://www.rolex.com/en-us" target="_blank" rel="noopener noreferrer">
                <img src="images/sponsors-img/rolex.avif" alt="rolex-logo" className="sponsor" />
                </a>
                <a href="https://www.pirelli.com/tyres/en-ww/motorsport/f1/tyres?utm_source=formula1.com&utm_medium=referral&utm_campaign=ww_motorsport_f1&utm_content=homepage" target="_blank" rel="noopener noreferrer">
                <img src="images/sponsors-img/pirelli.avif" alt="pirelli-logo" className="sponsor" />
                </a>
                <a href="https://www.aramco.com/" target="_blank" rel="noopener noreferrer">
                <img src="images/sponsors-img/aramco.avif" alt="aramco-logo" className="sponsor" />
                </a>
                <a href="https://www.heineken.com/ca/en/agegateway?returnurl=%2f" target="_blank" rel="noopener noreferrer">
                <img src="images/sponsors-img/Heineken - Outlined.avif" alt="heineken-logo" className="sponsor" />
                </a>
                <a href="https://inmotion.dhl/en/formula-1?utm_content=DHL-F1&utm_source=f1&utm_medium=website&utm_campaign=DHL-F1" target="_blank" rel="noopener noreferrer">
                <img src="images/sponsors-img/dhl.avif" alt="dhl-logo" className="sponsor" />
                </a>
                <a href="https://www.qatarairways.com/en-ca/homepage.html" target="_blank" rel="noopener noreferrer">
                <img src="images/sponsors-img/qatar (1).avif" alt="qatarairways-logo" className="sponsor" />
                </a>
                <a href="https://aws.amazon.com/sports/f1/" target="_blank" rel="noopener noreferrer">
                <img src="images/sponsors-img/AWS GLOBAL.avif" alt="aws-logo" className="sponsor" />
                </a>
                <a href="https://crypto.com/ca" target="_blank" rel="noopener noreferrer">
                <img src="images/sponsors-img/crypto.com.avif" alt="crypto-logo" className="sponsor" />
                </a>
                <a href="https://www.msccruises.com/int" target="_blank" rel="noopener noreferrer">
                <img src="images/sponsors-img/msc.avif" alt="msc-logo" className="sponsor" />
                </a>
                <a href="https://www.salesforce.com/campaign/formula1/?d=7013y000002RO1gAAG&utm_source=formula1&utm_medium=referral&utm_campaign=us_c360aw&utm_content=formula1-salesforce-logo_7013y000002RO1gAAG" target="_blank" rel="noopener noreferrer">
                <img src="images/sponsors-img/salesforce.png" alt="salesforce-logo" className="sponsor" />
                </a>
            </div>
            <hr id="bottom" />
            <div className="secondary-sponsors">
                <img src="images/sponsors-img/Paramount+.png" alt="paramount-logo" className="sponsor-logo" />
                <img src="images/sponsors-img/lenovo.avif" alt="lenovo-logo" className="sponsor-logo" />
                <img src="images/sponsors-img/ferrari-trento.avif" alt="ferrari-logo" className="sponsor-logo" />
                <img src="images/sponsors-img/liqui-moly.avif" alt="liqui-logo" className="sponsor-logo" />
            </div>
            <hr id="bottom" />
            <div className="third-sponsors">
                <img src="images/sponsors-img/Amex.png" alt="amex-logo" className="sponsor-logo" />
                <img src="images/sponsors-img/Workday.avif" alt="workday-logo" className="sponsor-logo" />
                <img src="images/sponsors-img/BBS.avif" alt="bbs-logo" className="sponsor-logo" />
                <img src="images/sponsors-img/TATA.avif" alt="tata-logo" className="sponsor-logo" />
                <img src="images/sponsors-img/188.avif" alt="188-logo" className="sponsor-logo" />
                <img src="images/sponsors-img/puma.png" alt="puma-logo" className="sponsor-logo" />
            </div>
            <hr id="bottom" />
            <div id="apps">
                <p>DOWNLOAD THE OFFICIAL F1 APP BELOW</p>
                <a href="https://play.google.com/store/apps/details?id=com.softpauer.f1timingapp2014.basic&hl=en_GB&pli=1" target="_blank" rel="noopener noreferrer">
                <img src="images/sponsors-img/google-play-badge.jpg" alt="Download on Google Play" className="sponsor-logo" />
                </a>
                <a href="https://apps.apple.com/gb/app/formula-1/id835022598" target="_blank" rel="noopener noreferrer">
                <img src="images/sponsors-img/download-on-the-app-store-apple.jpg" alt="Download on App Store" className="sponsor-logo" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;