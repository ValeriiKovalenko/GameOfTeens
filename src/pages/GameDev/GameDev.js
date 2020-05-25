import React, { Component } from 'react';
import ReadMoreReact from 'read-more-react';
import { animateScroll as scroll } from "react-scroll";
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import VoteModal from '../../components/VoteModal/VoteModal';
import style from './GameDev.module.css';

class GameDev extends Component {

    state = {
        showModal: false
       }
        handleModal = () => {
        this.setState({showModal: !this.state.showModal});
      }

    render() {

const {handleModal} = this;

        const scrollToTop = () => {
            scroll.scrollToTop();
        };

        const modalOnTop = () => {
            scrollToTop();
            handleModal();
        }



        return (
            <div className={style.body}>
                <Navigation />

                {this.state.showModal && <button className={style.closeBtn} onClick={this.handleModal}></button>}
                { this.state.showModal && <VoteModal handleModal={this.handleModal}/> }
      
                




                <button onClick={scrollToTop} className={style.topBtn}></button>


                <h2 className={style.title}>GameDev</h2>
                <p className={style.intro}>Розробка односторінкових сайтів</p>
                <ul className={style.workList}>
                    <li className={style.workItem}>
                        <div className={style.likeCounter}><span className={style.likeNumber}>19</span></div>
                        <img src="#" alt="" />
                        <h4>Some project</h4>

                        <p className={style.projectIntro}>
                            <ReadMoreReact text={'Some txt Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias id nemo quia deleniti, autem saepe veniam fugit itaque amet expedita. Id tenetur commodi nesciunt ipsum qui eos officiis magnam mollitia?Id tenetur commodi nesciunt ipsum qui eos officiis magnam mollitia?Id tenetur commodi nesciunt ipsum qui eos officiis magnam mollitia?Id tenetur commodi nesciunt ipsum qui eos officiis magnam mollitia?'}
                                min={200}
                                ideal={201}
                                max={500}
                                readMoreText={"...Читати далі"} /></p>

                        <button  className={style.demo}>Демо версія</button>
                        <button  onClick={modalOnTop} className={style.voteBtn}>Голосувати</button></li>
                    <li className={style.workItem}>
                        <div className={style.likeCounter}><span className={style.likeNumber}>19</span></div>
                        <img src="#" alt="" />
                        <h4>Some project</h4>

                        <p className={style.projectIntro}>
                            <ReadMoreReact text={'Some txt Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias id nemo quia deleniti, autem saepe veniam fugit itaque amet expedita. Id tenetur commodi nesciunt ipsum qui eos officiis magnam mollitia?Id tenetur commodi nesciunt ipsum qui eos officiis magnam mollitia?Id tenetur commodi nesciunt ipsum qui eos officiis magnam mollitia?Id tenetur commodi nesciunt ipsum qui eos officiis magnam mollitia?'}
                                min={200}
                                ideal={201}
                                max={500}
                                readMoreText={"...Читати далі"} /></p>

                        <button className={style.demo}>Демо версія</button>
                        <button onClick={modalOnTop} className={style.voteBtn}>Голосувати</button></li>
                    <li className={style.workItem}>
                        <div className={style.likeCounter}><span className={style.likeNumber}>19</span></div>
                        <img src="#" alt="" />
                        <h4>Some project</h4>
                        <p className={style.projectIntro}>

                            <ReadMoreReact text={'Some txt Li nesciunt ipsum qui eos officiis magnam mollitia?Id tenetur commodi nesciunt ipsum qui eos officiis magnam mollitia?Id tenetur commodi nesciunt ipsum qui eos officiis magnam mollitia?Id tenetur commodi nesciunt ipsum qui eos officiis magnam mollitia?'}
                                min={200}
                                ideal={201}
                                max={500}
                                readMoreText={"...Читати далі"} /></p>

                        <button className={style.demo}>Демо версія</button>
                        <button onClick={modalOnTop} className={style.voteBtn}>Голосувати</button></li>
                    <li className={style.workItem}>
                        <div className={style.likeCounter}><span className={style.likeNumber}>19</span></div>
                        <img src="#" alt="" />
                        <h4>Some project</h4>
                        <p className={style.projectIntro}>

                            <ReadMoreReact text={'Some txt Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias id nemo quia deleniti, autem saepe veniam fugit itaque amet expedita. Id tenetur commodi nesciunt ipsum qui eos officiis magnam mollitia?Id tenetur commodi nesciunt ipsum qui eos officiis magnam mollitia?Id tenetur commodi nesciunt ipsum qui eos officiis magnam mollitia?Id tenetur commodi nesciunt ipsum qui eos officiis magnam mollitia?'}
                                min={200}
                                ideal={201}
                                max={500}
                                readMoreText={"...Читати далі"} /></p>

                        <button className={style.demo}>Демо версія</button>
                        <button onClick={modalOnTop} className={style.voteBtn}>Голосувати</button></li>
                    <li className={style.workItem}>
                        <div className={style.likeCounter}><span className={style.likeNumber}>19</span></div>
                        <img src="#" alt="" />
                        <h4>Some project</h4>
                        <p className={style.projectIntro}>

                            <ReadMoreReact text={'Some txt Lore Molestias id nemo quia deleniti, autem saepe veniam fugit itaque amet expedita. Id tenetur commodi nesciunt ipsum qui eos officiis magnam mollitia?Id tenetur commodi nesciunt ipsum qui eos officiis magnam mollitia?Id tenetur commodi nesciunt ipsum qui eos officiis magnam mollitia?Id tenetur commodi nesciunt ipsum qui eos officiis magnam mollitia?'}

                                min={200}
                                ideal={201}
                                max={500}
                                readMoreText={"...Читати далі"} /></p>

                        <button className={style.demo}>Демо версія</button>
                        <button onClick={modalOnTop} className={style.voteBtn}>Голосувати</button></li>
                </ul>

                <Footer />
            </div>
        )
    }
}
export default GameDev;
