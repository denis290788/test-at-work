import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useUserStore } from "../../stores/userStore";
import { UserSettings } from "../../components/UserSettings/UserSettings";
import "./EditUser.scss";
import type { UserFormData } from "../../types/user";
import { UserForm } from "../../components/common/UserForm/UserForm";

export const EditUser: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { users, updateUser, isLoading } = useUserStore();
    const [activeSection, setActiveSection] = useState("profile");

    const user = users.find((u) => u.id === Number(id));

    const handleFormSubmit = (data: UserFormData) => {
        if (user) {
            updateUser(user.id, {
                name: data.name,
                username: data.username,
                email: data.email,
                address: { ...user.address, city: data.city },
                phone: data.phone,
                company: { ...user.company, name: data.companyName },
            });
        }
    };

    // if (isLoading) {
    //     return <Loader />;
    // }

    if (!user) {
        return <div className="error">Пользователь не найден</div>;
    }

    return (
        <div className="edit-user">
            <div className="edit-user__content">
                <UserSettings
                    user={user}
                    activeSection={activeSection}
                    onSectionChange={setActiveSection}
                />

                <UserForm user={user} onSubmit={handleFormSubmit} />
            </div>
        </div>
    );
};
