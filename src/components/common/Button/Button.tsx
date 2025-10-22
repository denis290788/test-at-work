import React from "react";
import "./Button.scss";

interface ButtonProps {
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    disabled?: boolean;
    children: React.ReactNode;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    type = "button",
    onClick,
    disabled = false,
    children,
    className = "",
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`button ${disabled ? "disabled" : ""} ${className}`}
        >
            {children}
        </button>
    );
};
