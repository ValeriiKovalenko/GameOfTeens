import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './VoteModal.module.css';
import succesLogo from '../../img/succes.svg';

export const SuccesVote = () => {
    return (
        <div className={style.modal}>
           <h3 className={style.title}>Ваш голос успішно зараховано!</h3>

        
                        <NavLink exact to="/">
                            <button className={style.mainPageBtn}>Головна</button>
                        </NavLink>
       
        </div>
    )
}
