import React from "react";
import "./Header.scss";
import { LogoSection } from "../../ui/LogoSection/LogoSection";
import { HeaderActions } from "../../common/HeaderActions/HeaderActions";

export const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__container">
                <LogoSection />
                <HeaderActions />
            </div>
        </header>
    );
};
