import React, {useState} from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';

function Header(props) {

    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon/>
                <Link to="/">
                    <img
                        className="header__logo"
                        src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo-500x313.png"
                        alt="youtube logo"
                    />
                </Link>
            </div>
            <div className="header__input">
                <input
                    onChange={(e) => setInputSearch(e.target.value)}
                    value={inputSearch}
                    placeholder="Search"
                    type="text"
                />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton"/>
                </Link>
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon"/>
                <Avatar
                    alt="Ilkhomjon Abdugafurov"
                    src="https://avatars0.githubusercontent.com/u/67899175?s=460&u=f63f030570b46e364dd3cd1a3a631c46ccf5f2e2&v=4"
                />
            </div>
        </div>
    );
}

export default Header;