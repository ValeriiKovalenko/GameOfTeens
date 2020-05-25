import React from 'react';
import style from './Footer.module.css';

 const Footer = () => {
    return (
        <footer className={style.footer}>
                    <h4 className={style.contactsTitle}>Contacts</h4>
                    <div className={style.contacts}>
                        <span> contact@gameofteens.ua </span>
                        <span>+38 093 343 21 27</span>
                        <span>+38 067 326 95 92</span>
                        <span>+38 050 366 17 77</span>
                        <div className={style.socials}>
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                        </div>
                    </div>
                    <p className={style.copyright}>© Copyright <span>GoiTeens</span> </p>
                </footer>
    )
}

export default Footer;