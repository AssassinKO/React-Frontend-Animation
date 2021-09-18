import React from 'react';
import './header.css';
import './header.responsive.css';

function Header(){
    return(
        <header>
            <div className="header-content">
                {/* menu  */}
               <div className="menu-div">
                   <a href="#" className="menu-a">
                       <div className="menu-icons-div">
                           <div className="a-menu-icon">
                              <p className="menu-icon">-</p>
                           </div>
                           <div className="a-menu-icon" id="a-menu-icon-2">
                             <p className="menu-icon">-</p>
                            </div>
                       </div>
                       <h3 className="menu-title">
                           MENU
                       </h3>
                   </a>
               </div>
               {/* website title  */}
               <div className="header-title">
                   <a href="#">
                   <h1>
                     YOlÉlÉ 
                   </h1>
                   </a>
               </div>
               {/* cart  */}
                <div className="cart-div">
                   <a href="#">
                       <h5 className="cart-title">
                           CART 
                           <span className="cart-number">
                            (00)
                           </span>
                       </h5>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header