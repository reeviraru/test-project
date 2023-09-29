import React from "react";

function Navbar() {
    return (
        <nav className='navbar'>
            <a className='navbar__logo' href="/">Logotype</a>
            
            <div className='container'>
                <ul className='navbar__list'>
                    <li className='navbar__list_item'><a href="/">Home</a></li>
                    <li className='navbar__list_item'><a href="/posts">Posts</a></li>
                    <li className='navbar__list_item'><a href="/about">About</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;