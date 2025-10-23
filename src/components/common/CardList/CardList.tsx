import React from "react";
import { UserCard } from "../UserCard/UserCard";
import type { UserCard as UserCardType } from "../../../types/user";
import "./CardList.scss";

interface CardListProps {
    users: UserCardType[];
    status: "active" | "archived";
}

export const CardList: React.FC<CardListProps> = ({ users, status }) => {
    return (
        <section className="card-list">
            <div className="card-list__header">
                <h2 className="card-list__title">{status === "active" ? "Активные" : "Архив"}</h2>
                <div className="card-list__divider" />
            </div>

            <div className="card-list__grid">
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </section>
    );
};
