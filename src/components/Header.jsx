import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return <header>
        <nav>
            <div id="header-quanment">
                <Link to="/">
                Quanment
                </Link>
                </div>
            <div id="header-history">
                <Link to="/history">
                History
                </Link>
                </div>
        </nav>
        <article>Welcome To Quantity Measurement</article>
    </header>
}

export default Header;