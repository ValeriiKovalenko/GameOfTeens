import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import HomeModal from '../HomeModal/HomeModal';
import style from './Navigation.module.css';
import logo from '../../img/logo.svg';

export default class Navigation extends Component {

    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
        }
    }



    render() {
        const ToogleModal = () => {
            this.setState({ modalIsOpen: !this.state.modalIsOpen });
        }

        const { modalIsOpen } = this.state;

        return (
            <div>
                <NavLink exact to="/">
                    <img src={logo} className={style.logo} alt="" />
                </NavLink>

                <button onClick={ToogleModal} className={modalIsOpen ? style.cross : style.burger}></button>
                
                {modalIsOpen ? <HomeModal  className={style.modal} /> : ''}
            </div>
        )
    }
}
