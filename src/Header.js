import React, { useState } from 'react';
import './Header.css';
import PinterestIcon from '@material-ui/icons/Pinterest';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TextsmsIcon from '@material-ui/icons/Textsms';
import FaceIcon from '@material-ui/icons/Face';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import db from './firebase';

function Header(props) {
  const [input, setInput] = useState("");
  // console.log('What is input');
  console.log(props, 'what is props in Header');

  // To add input to our Firebase
  const onSearchSubmit = (e) => {
    e.preventDefault();

    props.onSubmit(input);
    
    // Connecting to Firebase
    db.collection('terms').add({
      term: input,
    });

  }

  return (
    <div className="app__header">
      <div className="header__wrapper">
        <div className="header__logo">
          <IconButton>
            <PinterestIcon />
          </IconButton>
        </div>
          <div className="header__button homePage">
            <a href="/">Homepage</a>
          </div>
          <div className="header__button following">
            <a href="/">Following</a>
          </div>
          <div className="header__search">
            <div className="header__searchContainer">
              <IconButton>
                <SearchIcon />
              </IconButton>
              <form>
                <input type="text" onChange={(e) => setInput(e.target.value)}/>
                <button type="submit" onClick={onSearchSubmit}>Submit</button>
              </form>
            </div>
          </div>
        <div className="header__menuItems">
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <TextsmsIcon />
          </IconButton>
          <IconButton>
            <FaceIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
