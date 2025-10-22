import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../stores/userStore";
import { UserCard } from "../../components/common/UserCard/UserCard";
import { useUsers } from "../../hooks/useUsers";
import "./Home.scss";

export const Home: React.FC = () => {
    const navigate = useNavigate();
    const { users, archiveUser, hideUser, activateUser, isLoading } = useUserStore();
    useUsers();

    const activeUsers = users.filter((user) => user.status === "active");
    const archivedUsers = users.filter((user) => user.status === "archived");

    const handleEdit = (id: number) => {
        navigate(`/edit/${id}`);
    };

    // if (isLoading) {
    //     return <Loader />;
    // }

    return (
        <div className="home">
            <section className="users-section">
                <div className="section-header">
                    <h2 className="section-title">Активные</h2>
                    <div className="section-divider" />
                </div>

                <div className="users-grid">
                    {activeUsers.map((user) => (
                        <UserCard
                            key={user.id}
                            user={user}
                            onEdit={handleEdit}
                            onArchive={archiveUser}
                            onHide={hideUser}
                        />
                    ))}
                </div>
            </section>

            {archivedUsers.length > 0 && (
                <section className="users-section">
                    <div className="section-header">
                        <h2 className="section-title">Архив</h2>
                        <div className="section-divider" />
                    </div>

                    <div className="users-grid">
                        {archivedUsers.map((user) => (
                            <UserCard
                                key={user.id}
                                user={user}
                                onEdit={handleEdit}
                                onArchive={archiveUser}
                                onHide={hideUser}
                                onActivate={activateUser}
                            />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};
