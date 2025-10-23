import React from "react";
import "./UserSettings.scss";

interface UserSettingsProps {
    user: {
        avatar: string;
        name: string;
    };
}

const menuItems = [
    { id: "profile", label: "Данные профиля" },
    { id: "workspace", label: "Рабочее пространство" },
    { id: "privacy", label: "Приватность" },
    { id: "security", label: "Безопасность" },
];

export const UserSettings: React.FC<UserSettingsProps> = ({ user }) => {
    const activeSection = "profile";
    return (
        <div className="user-settings">
            <div className="user-settings__avatar">
                <img src={user.avatar} alt={user.name} />
            </div>

            <nav className="user-settings__menu">
                {menuItems.map((item) => (
                    <div key={item.id} className="user-settings__menu-item">
                        <button
                            className={`user-settings__menu-button ${
                                activeSection === item.id ? "active" : ""
                            }`}
                            onClick={() => {}}
                        >
                            {item.label}
                        </button>
                    </div>
                ))}
            </nav>
        </div>
    );
};
