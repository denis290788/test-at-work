import React from "react";
import { useUserStore } from "../../../stores/userStore";
import { CardList } from "../../common/CardList/CardList";
import { useUsers } from "../../../hooks/useUsers";
import { Loader } from "../../ui/Loader/Loader";
import "./Home.scss";

export const Home: React.FC = () => {
    const { users, isLoading } = useUserStore();
    useUsers();

    const activeUsers = users.filter((user) => user.status === "active");
    const archivedUsers = users.filter((user) => user.status === "archived");

    return (
        <div className="home">
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <CardList users={activeUsers} status="active" />
                    {archivedUsers.length > 0 && (
                        <CardList users={archivedUsers} status="archived" />
                    )}
                </>
            )}
        </div>
    );
};
