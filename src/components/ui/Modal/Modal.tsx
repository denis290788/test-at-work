import React, { useEffect, useState } from "react";
import "./Modal.scss";
import { CheckboxLogo } from "../icons/CheckboxLogo";
import { CancelIcon } from "../icons/CancelIcon";

export const Modal: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
    const [visible, setVisible] = useState(isOpen);

    useEffect(() => {
        setVisible(isOpen);
        if (isOpen) {
            const timer = setTimeout(() => setVisible(false), 4000);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!visible) return null;

    return (
        <div className="modal-overlay" onClick={() => setVisible(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={() => setVisible(false)}>
                    <CancelIcon />
                </button>
                <div className="modal-body">
                    <div className="modal-icon">
                        <CheckboxLogo />
                    </div>
                    <p className="modal-text">Изменения сохранены!</p>
                </div>
            </div>
        </div>
    );
};
