import './Styles.scss';
import {NavLink} from 'react-router-dom';
import  {ICON7, ICON9} from '../../assets';
import clsx from 'clsx';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {navlist} from './constans';

export default function App () {

    // dùng để hiển thị nav mobile
    const [isNavMobile, setIsNavMobile] = useState(false);

    return (
        <header>
            {/* phần top bar ở trên cùng */}
            <div className='top-bar'>
                <div className='top-bar-item'>
                    {/* email */}
                    <img src={ICON9}/> 
                    <span>Sfin@.vn</span>
                        
                    {/* dấu gạch */}
                    <span className='divider' >|</span>

                    {/* phone */}
                    <img src={ICON7}/>
                    <span>0969877888</span>

                    <button onClick={()=> setIsNavMobile(true)} 
                        className='btn-show-nav-mobile'>
                        <MenuIcon className="icon-menu" />
                    </button>
                </div>

                <div className='top-bar-item'>
                    <span>Hỗ trợ tối ưu các doanh nghiệp và chủ spa</span>
                </div>
            </div>

            {/* phần menu pc*/}
            <div className='header-nav-pc'>
                <ul className='nav-list'>
                    {navlist.map( (navItem, index) =>
                        <li className='nav-item' key={index} >
                            <NavLink className="nav-link" to={navItem.to}>{navItem.name}</NavLink>
                        </li>
                    )}
                </ul>
            </div>

            {/* phần menu mobile */}
            <div onClick={() => setIsNavMobile(false)}
                className = { clsx(
                    "header-nav-mobile",
                    {"open": isNavMobile},
                )}
            >
                <ul className='nav-list'
                    onClick={e => e.stopPropagation()}
                >
                    {navlist.map( (navItem, index) =>
                        <li className='nav-item' key={index} >
                            <NavLink className="nav-link" to={navItem.to}>
                                {navItem.icon}
                                <span className='nav-link-name' >{navItem.name}</span>
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>
        </header>
    )
}