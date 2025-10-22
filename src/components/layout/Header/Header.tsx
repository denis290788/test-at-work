import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { LogoIcon } from "../../icons/LogoIcon";
import { HeartIcon } from "../../icons/HeartIcon";
import { BellIcon } from "../../icons/BellIcon";

export const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__logo">
                    <LogoIcon className="header__logo-icon" />
                    <span className="header__logo-text">
                        <span className="header__logo-at">at</span>
                        <span className="header__logo-work">-work</span>
                    </span>
                </Link>

                <div className="header__user-section">
                    <div className="header__icons">
                        <button className="header__icon-button">
                            <HeartIcon />
                        </button>
                        <button className="header__icon-button">
                            <BellIcon />
                        </button>
                    </div>

                    <div className="header__profile">
                        <div className="header__avatar">
                            <img
                                src="../../../../public/Screenshot 2025-10-22 231159.png"
                                alt="Avatar"
                                className="header__avatar-image"
                            />
                        </div>
                        <span className="header__username">Denis29</span>
                    </div>
                </div>
            </div>
        </header>
    );
};
