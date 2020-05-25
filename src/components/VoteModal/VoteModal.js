import React, { Component } from 'react';
import style from './VoteModal.module.css';


export default class VoteModal extends Component {




    render() {



        return (
            <div className={style.modal}>

                <h3 className={style.title}>Щоб віддати свій голос, заповніть форму</h3>
                <form className={style.form} action="">
                    <label>
                        <span>Ім'я* </span>
                        <input required name="name" type="text" />
                    </label>
                    <label>
                        <span>Вік* </span>
                        <select required placeholder="aaa" size="1" name="age" >
                            <option value="7-11">7-11 років</option>
                            <option value="12-15">12 - 15 років</option>
                            <option value="16-20">16 - 20 років</option>
                            <option value="20+">20 і старше</option>
                        </select>
                    </label>
                    <label>
                        <span>Місто* </span>
                        <input required name="city" type="text" />
                    </label>
                    <label>
                        <span>Телефон* </span>
                        <input required name="phone" type="tel" pattern="^[ 0-9]+$" placeholder="(093)-XXX-XX-XX" />
                    </label>

                    <label>

                    </label>
                    <input className={style.submit} value="Голосувати" type="submit" />
                </form>
            </div>
        )
    }
}
