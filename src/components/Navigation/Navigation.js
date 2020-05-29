import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import HomeModal from '../HomeModal/HomeModal';
import style from './Navigation.module.css';
import logo from '../../img/logo.svg';
import colorLogo from '../../img/colorLogo.svg'

export default class Navigation extends Component {

    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            coloredLogo: false
        }
    }

      
    

    

    
    render() {

    //   setInterval(() => {
    //         window.pageYOffset > 500 ? this.setState({coloredLogo: true}) : this.setState({coloredLogo: false});
    //     }, 1000);

        const ToogleModal = () => {
            this.setState({ modalIsOpen: !this.state.modalIsOpen });
            this.setState({coloredLogo: !this.state.coloredLogo})
        }

        const { modalIsOpen, coloredLogo } = this.state;

        return (
            <nav>
                <NavLink exact to="/">
                    <img src={coloredLogo ? colorLogo : logo} className={style.logo} alt="" />
                </NavLink>

                <button onClick={ToogleModal} className={modalIsOpen ? style.cross : coloredLogo ? style.blueBurger : style.burger}></button>
                
                {modalIsOpen ? <HomeModal  className={style.modal} /> : ''}
            </nav>
        )
    }
}
