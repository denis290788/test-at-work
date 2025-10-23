import React from "react";
import type { UserCard as UserCardType } from "../../../types/user";
import "./UserCard.scss";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";

interface UserCardProps {
    user: UserCardType;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
    const isArchived = user.status === "archived";

    return (
        <div className={`user-card ${isArchived ? "archived" : ""}`}>
            <div className="user-card__content">
                <div className="user-card__avatar-section">
                    <img
                        src={user.avatar}
                        alt={user.name}
                        className={`user-card__avatar ${isArchived ? "grayscale" : ""}`}
                    />
                </div>

                <div className="user-card__info">
                    <div className="user-card__header">
                        <h3 className="user-card__username">{user.username}</h3>

                        <DropdownMenu user={user} />
                    </div>

                    <p className="user-card__company">{user.company.name}</p>
                    <div className="user-card__city">
                        <span>{user.address.city}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
