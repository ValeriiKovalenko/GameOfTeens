import React,{ Component, createRef } from 'react';
import { NavLink } from 'react-router-dom';
import style from './HomeModal.module.css';
import Footer from '../Footer/Footer';


class HomeModal extends Component {
    constructor() {
        super();
    
        this.state = {
          modalIsOpen: false,
        };
        this.navRef = createRef();
      }
    
      componentDidMount() {
        setTimeout(() => {
          this.setState({
            modalIsOpen: true,
          });
        }, 0);
      }

      
    
    
    
    render() {
        const { modalIsOpen } = this.state;
    return (
        <div className={style.overlay}>
            <nav ref={this.navRef} className={modalIsOpen ? style.nav : style.hidden}>
                <ul className={style.navList}>
                <li className={style.navItem}>
                        <NavLink exact to="/">
                            <h3 className={style.directionName}>Головна</h3>
                        </NavLink>
                    </li>
                    <li className={style.navItem}>
                        <NavLink exact to="/htmlcss">
                            <h3 className={style.directionName}>HTML+CSS</h3>
                        </NavLink>
                    </li>
                    <li className={style.navItem}>
                        <NavLink exact to="/js">
                            <h3 className={style.directionName}>JavaScript</h3>
                        </NavLink>
                    </li>
                    <li className={style.navItem}>
                        <NavLink exact to="/gamedev">
                        <h3 className={style.directionName}>Game-Dev</h3>
                        </NavLink>
                    </li>
                    <li className={style.navItem}>
                        <NavLink exact to="/digitalart">
                        <h3 className={style.directionName}>Digital Art</h3>
                        </NavLink>
                    </li>
                    <li className={style.navItem}>
                        <NavLink exact to="/scratch">
                        <h3 className={style.directionName}>Scratch</h3>
                        </NavLink>
                    </li>
                    <li className={style.navItem}>
                        <NavLink exact to="/arduino">
                        <h3 className={style.directionName}>Arduino</h3>
                        </NavLink>
                    </li>
                </ul>
                <Footer />
            </nav>
        </div>
    )
}
}
export default HomeModal;