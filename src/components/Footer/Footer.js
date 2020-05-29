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
                        <a target="_blank" href="https://www.facebook.com/GoITeens/"></a>
                        <a target="_blank" href="https://www.instagram.com/go_iteens/"></a>
                        <a target="_blank" href="https://www.youtube.com/channel/UCN7NQEBOUuIoXrJZzqVb58Q/featured"></a>
                        </div>
                    </div>
                    <p className={style.copyright}>© Copyright <span>GoiTeens</span> </p>
                </footer>
    )
}

export default Footer;