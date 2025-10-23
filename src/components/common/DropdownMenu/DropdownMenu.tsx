import React, { useState, useRef, useEffect } from "react";
import { DotsIcon } from "../../ui/icons/DotsIcon";
import "./DropdownMenu.scss";
import { useUserStore } from "../../../stores/userStore";
import { useNavigate } from "react-router-dom";
import type { UserCard as UserCardType } from "../../../types/user";

interface DropdownMenuProps {
    user: UserCardType;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const { archiveUser, hideUser, activateUser } = useUserStore();
    const navigate = useNavigate();

    const isArchived = user.status === "archived";

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleMenuToggle = () => setIsOpen((prev) => !prev);

    const handleAction = (callback: () => void) => {
        callback();
        setIsOpen(false);
    };

    const handleEdit = () => {
        navigate(`/edit/${user.id}`);
        setIsOpen(false);
    };

    return (
        <div className="dropdown-menu" ref={menuRef}>
            <button
                className={`dropdown-menu__button ${isOpen ? "active" : ""}`}
                onClick={handleMenuToggle}
            >
                <DotsIcon />
            </button>

            {isOpen && (
                <div className="dropdown-menu__content">
                    {isArchived ? (
                        <button
                            className="dropdown-menu__item"
                            onClick={() => handleAction(() => activateUser(user.id))}
                        >
                            Активировать
                        </button>
                    ) : (
                        <>
                            <button className="dropdown-menu__item" onClick={handleEdit}>
                                Редактировать
                            </button>
                            <button
                                className="dropdown-menu__item"
                                onClick={() => handleAction(() => archiveUser(user.id))}
                            >
                                Архивировать
                            </button>
                            <button
                                className="dropdown-menu__item"
                                onClick={() => handleAction(() => hideUser(user.id))}
                            >
                                Скрыть
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};
