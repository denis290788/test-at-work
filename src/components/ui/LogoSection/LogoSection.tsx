import React from "react";
import { Link } from "react-router-dom";
import { LogoIcon } from "../icons/LogoIcon";
import "./LogoSection.scss";

export const LogoSection: React.FC = () => {
    return (
        <Link to="/" className="logo-section">
            <LogoIcon className="logo-section__icon" />
            <span className="logo-section__text">
                <span className="logo-section__at">at</span>
                <span className="logo-section__work">-work</span>
            </span>
        </Link>
    );
};
