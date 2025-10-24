import React from "react";
import { HeartIcon } from "../../ui/icons/HeartIcon";
import { BellIcon } from "../../ui/icons/BellIcon";
import "./HeaderActions.scss";

export const HeaderActions: React.FC = () => {
    return (
        <div className="header-actions">
            <div className="header-actions__icons">
                <button className="header-actions__icon-button">
                    <HeartIcon />
                </button>
                <button className="header-actions__icon-button">
                    <BellIcon />
                </button>
            </div>

            <div className="header-actions__profile">
                <div className="header-actions__avatar">
                    <img
                        src="/test-at-work/Screenshot-2025-10-22-231159.png"
                        alt="Avatar"
                        className="header-actions__avatar-image"
                    />
                </div>
                <span className="header-actions__username">Ivan1234</span>
            </div>
        </div>
    );
};
