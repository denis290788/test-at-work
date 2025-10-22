import React, { useState, useRef, useEffect } from "react";
import { DotsIcon } from "../../icons/DotsIcon";
import "./DropdownMenu.scss";

interface DropdownMenuProps {
    onEdit: () => void;
    onArchive: () => void;
    onHide: () => void;
    onActivate?: () => void;
    isArchived?: boolean;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
    onEdit,
    onArchive,
    onHide,
    onActivate,
    isArchived = false,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleAction = (action: () => void) => {
        action();
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
                            onClick={() => handleAction(onActivate!)}
                        >
                            Активировать
                        </button>
                    ) : (
                        <>
                            <button
                                className="dropdown-menu__item"
                                onClick={() => handleAction(onEdit)}
                            >
                                Редактировать
                            </button>
                            <button
                                className="dropdown-menu__item"
                                onClick={() => handleAction(onArchive)}
                            >
                                Архивировать
                            </button>
                            <button
                                className="dropdown-menu__item"
                                onClick={() => handleAction(onHide)}
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
