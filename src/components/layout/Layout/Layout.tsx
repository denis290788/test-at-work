import React from "react";
import { Header } from "../Header/Header";
import "./Layout.scss";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main className="layout__main">
                <div className="layout__container">{children}</div>
            </main>
        </div>
    );
};
