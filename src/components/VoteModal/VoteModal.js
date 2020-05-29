import React, { Component } from 'react';
import style from './VoteModal.module.css';
import { SuccesVote } from './SuccesVote';


export default class VoteModal extends Component {
    state = {
        name: '',
        age: '',
        city: '',
        phone: '',
        id: '',
        votingWasSauccesfull: false,

    }



    render() {

        const saveToState = (e) => {
            if (e.target.name === 'name') {
                this.setState({ name: e.target.value })
            } else if (e.target.name === 'age') {
                this.setState({ age: e.target.value })
            } else if (e.target.name === 'city') {
                this.setState({ city: e.target.value })
            } else if (e.target.name === 'phone') {
                this.setState({ phone: e.target.value })
            }

        }
        const { name, age, city, phone, id, votingWasSauccesfull } = this.state;

        const sendToBack = (e) => {
            e.preventDefault();
            let data = [{ name, age, city, phone }];


            //  тут будет отправка данных на бэк

            this.setState({ votingWasSauccesfull: true });
        }

        return (
            <div className={style.modal}>

                <h3 className={style.title}>Щоб віддати свій голос, заповніть форму</h3>
                <form className={style.form} action="#">
                    <label>
                        <span>Ім'я* </span>
                        <input onChange={saveToState} required name="name" type="text" />
                    </label>
                    <label>
                        <span>Вік* </span>
                        <select onChange={saveToState} required size="1" name="age" >
                            <option value="7-11">7-11 років</option>
                            <option value="12-15">12 - 15 років</option>
                            <option value="16-20">16 - 20 років</option>
                            <option value="20+">20 і старше</option>
                        </select>
                    </label>
                    <label>
                        <span>Місто* </span>
                        <input onChange={saveToState} required name="city" type="text" />
                    </label>
                    <label>
                        <span>Телефон* </span>
                        <input onChange={saveToState} required name="phone" type="tel" pattern="^[ 0-9]+$" placeholder="(093)-XXX-XX-XX" />
                    </label>

                    <label>

                    </label>
                    {name && age && city && phone && <input className={style.submit} onClick={sendToBack} value="Голосувати" type="submit" />
                        ||
                        <input className={style.submitNotActive} disabled value="Голосувати" type="submit" />}

                </form>
                {votingWasSauccesfull ? <SuccesVote /> : ''}
            </div>
        )
    }
}
