import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import style from './HomePage.module.css';

export default class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
        }
    }



    render() {



        const scrollToTop = () => {
            scroll.scrollToTop();
        };





        return (
            <body>
                <header className={style.header}>


                    <Navigation />


                    <h1 className={style.mainTitle}>Game Of Teens</h1>
                    <p className={style.mainIntro}>Велика битва за найкращий IT проект серед підлітків</p>

                    <p className={style.date}>1 - 5 червня 2020</p>


                </header>
                <main className={style.main}>
                    <button onClick={scrollToTop} className={style.topBtn}></button>
                    <h2 className={style.secondTitle}>Обирай категорію і залишай свій голос за проект, який тебе вразив</h2>

                    <ul className={style.mainList}>
                        <li className={style.mainListItem}>
                        <NavLink to="/htmlcss">HTML + CSS</NavLink>
                           
                        </li>
                        <li className={style.mainListItem}>
                        <NavLink to="/js">JavaScript</NavLink>
                        </li>
                        <li className={style.mainListItem}>
                        <NavLink to="/gamedev">GameDev</NavLink>
                        </li>
                        <li className={style.mainListItem}>
                        <NavLink to="/digitalart">Digital Art</NavLink>
                        </li>
                        <li className={style.mainListItem}>
                        <NavLink to="/scratch">Scratch</NavLink>
                        </li>
                        <li className={style.mainListItem}>
                        <NavLink to="/arduino">Arduino</NavLink>
                        </li>
                    </ul>
                </main>
                <Footer />
            </body>
        )
    }
}
