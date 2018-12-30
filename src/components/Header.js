import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu" style={{ background: 'rebeccapurple', padding: '12px', borderRadius: '10px' }}>
         <Link to="/" className="item">
            <h1 style={{color: 'whitesmoke', fontSize: '50px'}}>Twitch 2</h1>
         </Link>
            <div className="right menu" style={{display: 'flex', alignItems: 'center', flexDirection: 'column-reverse'}}>
                <Link to="/" className="item">
                    <h2 style={{color: 'whitesmoke'}}>All Streams</h2>
                </Link>
                <GoogleAuth/>
            </div>
        </div>
    )
}

export default Header;